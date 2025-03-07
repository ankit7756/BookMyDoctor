import request from 'supertest';
import express from 'express';
import adminRouter from '../routes/adminRoute.js';
import Doctor from '../models/doctorModel.js';
import Appointment from '../models/appointmentModel.js';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cloudinary from 'cloudinary';

// Mock the dependencies
jest.mock('bcrypt');
jest.mock('jsonwebtoken');
jest.mock('cloudinary');
jest.mock('../models/doctorModel.js');
jest.mock('../models/appointmentModel.js');
jest.mock('../models/userModel.js');

// Create a test app instance
const app = express();
app.use(express.json());
app.use('/api/admin', adminRouter);

describe('Admin Controller Tests', () => {
    beforeEach(() => {
        // Reset mocks before each test
        jest.clearAllMocks();
    });

    // Test for loginAdmin
    describe('POST /api/admin/login', () => {
        it('should login admin successfully with correct credentials', async () => {
            // Mock environment variables
            process.env.ADMIN_EMAIL = 'admin@example.com';
            process.env.ADMIN_PASSWORD = 'admin123';
            process.env.JWT_SECRET = 'test-secret';

            // Mock jwt.sign to return a token
            jwt.sign.mockReturnValue('mockAdminToken');

            const response = await request(app)
                .post('/api/admin/login')
                .send({
                    email: 'admin@example.com',
                    password: 'admin123',
                });

            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.token).toBe('mockAdminToken');
            expect(jwt.sign).toHaveBeenCalledWith(
                { email: 'admin@example.com' },
                'test-secret',
                { expiresIn: '1d' }
            );
        });
    });

    // Test for addDoctor
    describe('POST /api/admin/add-doctor', () => {
        it('should add a new doctor successfully', async () => {
            // Mock bcrypt hash
            bcrypt.genSalt.mockResolvedValue('salt');
            bcrypt.hash.mockResolvedValue('hashedPassword');

            // Mock Cloudinary upload
            cloudinary.uploader.upload.mockResolvedValue({ secure_url: 'https://example.com/doctor.jpg' });

            // Mock Doctor.create to return a doctor object
            const mockDoctor = {
                id: 1,
                name: 'Test Doctor',
                email: 'doctor@example.com',
                password: 'hashedPassword',
                image: 'https://example.com/doctor.jpg',
                speciality: 'Cardiology',
                degree: 'MD',
                experience: '5 years',
                about: 'Experienced doctor',
                fees: 100,
                address: { line1: '123 Street', line2: 'City' },
            };
            Doctor.create.mockResolvedValue(mockDoctor);

            const response = await request(app)
                .post('/api/admin/add-doctor')
                .send({
                    name: 'Test Doctor',
                    email: 'doctor@example.com',
                    password: 'password123',
                    experience: '5 years',
                    about: 'Experienced doctor',
                    speciality: 'Cardiology',
                    degree: 'MD',
                    fees: 100,
                    address: { line1: '123 Street', line2: 'City' },
                })
                .attach('image', Buffer.from('test'), 'test.jpg');

            expect(response.status).toBe(201);
            expect(response.body.success).toBe(true);
            expect(response.body.message).toBe('Doctor added successfully');
            expect(Doctor.create).toHaveBeenCalledWith(expect.objectContaining({
                name: 'Test Doctor',
                email: 'doctor@example.com',
                password: 'hashedPassword',
                image: 'https://example.com/doctor.jpg',
                speciality: 'Cardiology',
                degree: 'MD',
                experience: '5 years',
                about: 'Experienced doctor',
                fees: 100,
                address: { line1: '123 Street', line2: 'City' },
            }));
            expect(bcrypt.genSalt).toHaveBeenCalledWith(10);
            expect(bcrypt.hash).toHaveBeenCalledWith('password123', 'salt');
            expect(cloudinary.uploader.upload).toHaveBeenCalled();
        });
    });

    // Test for allDoctors
    describe('GET /api/admin/all-doctors', () => {
        it('should fetch all doctors successfully', async () => {
            // Mock Doctor.findAll to return a list of doctors
            const mockDoctors = [
                { id: 1, name: 'Doctor 1', email: 'doctor1@example.com' },
                { id: 2, name: 'Doctor 2', email: 'doctor2@example.com' },
            ];
            Doctor.findAll.mockResolvedValue(mockDoctors);

            const response = await request(app)
                .get('/api/admin/all-doctors');

            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.doctors).toEqual(mockDoctors);
            expect(Doctor.findAll).toHaveBeenCalledWith({
                attributes: { exclude: ['password'] },
            });
        });
    });
});