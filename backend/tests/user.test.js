import request from 'supertest';
import express from 'express';
import userRouter from '../routes/userRoute.js';
import User from '../models/userModel.js';
import Doctor from '../models/doctorModel.js';
import Appointment from '../models/appointmentModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cloudinary from 'cloudinary';

// Mock the dependencies
jest.mock('bcrypt');
jest.mock('jsonwebtoken');
jest.mock('cloudinary');
jest.mock('../models/userModel.js');
jest.mock('../models/doctorModel.js');
jest.mock('../models/appointmentModel.js');

// Create a test app instance
const app = express();
app.use(express.json());
app.use('/api/user', userRouter);

describe('User Controller Tests', () => {
    beforeEach(() => {
        // Reset mocks before each test
        jest.clearAllMocks();
    });

    // Test for registerUser
    describe('POST /api/user/register', () => {
        it('should register a new user successfully', async () => {
            // Mock bcrypt hash
            bcrypt.genSalt.mockResolvedValue('salt');
            bcrypt.hash.mockResolvedValue('hashedPassword');

            // Mock User.findOne to return null (no existing user)
            User.findOne.mockResolvedValue(null);

            // Mock User.create to return a user object
            const mockUser = { id: 1, name: 'Test User', email: 'test@example.com', password: 'hashedPassword' };
            User.create.mockResolvedValue(mockUser);

            // Mock jwt.sign to return a token
            jwt.sign.mockReturnValue('mockToken');

            const response = await request(app)
                .post('/api/user/register')
                .send({
                    name: 'Test User',
                    email: 'test@example.com',
                    password: 'password123',
                });

            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.token).toBe('mockToken');
            expect(User.findOne).toHaveBeenCalledWith({ where: { email: 'test@example.com' } });
            expect(User.create).toHaveBeenCalledWith({
                name: 'Test User',
                email: 'test@example.com',
                password: 'hashedPassword',
            });
            expect(bcrypt.genSalt).toHaveBeenCalledWith(10);
            expect(bcrypt.hash).toHaveBeenCalledWith('password123', 'salt');
            expect(jwt.sign).toHaveBeenCalledWith({ id: 1 }, process.env.JWT_SECRET);
        });
    });

    // Test for loginUser
    describe('POST /api/user/login', () => {
        it('should login a user successfully', async () => {
            // Mock User.findOne to return a user
            const mockUser = { id: 1, email: 'test@example.com', password: 'hashedPassword' };
            User.findOne.mockResolvedValue(mockUser);

            // Mock bcrypt.compare to return true
            bcrypt.compare.mockResolvedValue(true);

            // Mock jwt.sign to return a token
            jwt.sign.mockReturnValue('mockToken');

            const response = await request(app)
                .post('/api/user/login')
                .send({
                    email: 'test@example.com',
                    password: 'password123',
                });

            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.token).toBe('mockToken');
            expect(User.findOne).toHaveBeenCalledWith({ where: { email: 'test@example.com' } });
            expect(bcrypt.compare).toHaveBeenCalledWith('password123', 'hashedPassword');
            expect(jwt.sign).toHaveBeenCalledWith({ id: 1 }, process.env.JWT_SECRET);
        });
    });

    // Test for bookAppointment
    describe('POST /api/user/book-appointment', () => {
        it('should book an appointment successfully', async () => {
            // Mock authUser middleware (assuming it sets req.body.userId)
            const mockUser = { id: 1, toJSON: jest.fn(() => ({ id: 1, name: 'Test User' })) };
            const mockDoctor = {
                id: 1,
                available: true,
                fees: 100,
                slots_booked: {},
                toJSON: jest.fn(() => ({ id: 1, name: 'Test Doctor' })),
            };
            const mockAppointment = { id: 1 };

            User.findByPk.mockResolvedValue(mockUser);
            Doctor.findByPk.mockResolvedValue(mockDoctor);
            Appointment.create.mockResolvedValue(mockAppointment);
            Doctor.update.mockResolvedValue(true);

            const response = await request(app)
                .post('/api/user/book-appointment')
                .send({
                    userId: 1,
                    docId: 1,
                    slotTime: '10:00',
                    slotDate: '2025-03-08',
                });

            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.message).toBe('Appointment booked');
            expect(User.findByPk).toHaveBeenCalledWith(1, { attributes: { exclude: ['password'] } });
            expect(Doctor.findByPk).toHaveBeenCalledWith(1, { attributes: { exclude: ['password'] } });
            expect(Appointment.create).toHaveBeenCalledWith(expect.objectContaining({
                userId: 1,
                doctorId: 1,
                amount: 100,
                slotTime: '10:00',
                slotDate: '2025-03-08',
                date: expect.any(Number),
            }));
            expect(Doctor.update).toHaveBeenCalledWith(
                expect.objectContaining({ slots_booked: { '2025-03-08': ['10:00'] } }),
                { where: { id: 1 } }
            );
        });
    });
});