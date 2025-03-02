// import express from "express";
// import upload from "../middlewares/multer.js"; // Add .js extension
// import { addDoctor, allDoctors, loginAdmin, appointmentsAdmin, appointmentCancelled, adminDashboard } from "../controllers/adminController.js"; // (Add more imports accordingly )
// import authAdmin from "../middlewares/authAdmin.js";
// import { changeAvailability } from '../controllers/doctorController.js';


// const adminRouter = express.Router();

// adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor); // authAdmin,
// adminRouter.post('/login', loginAdmin);
// adminRouter.get('/all-doctors', authAdmin, allDoctors)
// adminRouter.post('/change-availability', authAdmin, changeAvailability)
// adminRouter.get('/appointments', authAdmin, appointmentsAdmin) // This is left to import at the top
// adminRouter.post('/cancel-appointment', authAdmin, appointmentCancelled) // // This is left to import at the top
// adminRouter.get('/dashboard', authAdmin, adminDashboard) // // This is left to import at the top



// export default adminRouter;



import express from "express";
import upload from "../middlewares/multer.js";
import {
    addDoctor,
    allDoctors,
    loginAdmin,
    appointmentsAdmin,
    appointmentCancelled,
    adminDashboard
} from "../controllers/adminController.js";
import authAdmin from "../middlewares/authAdmin.js";
import { changeAvailability } from '../controllers/doctorController.js';

const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post('/login', loginAdmin);
adminRouter.get('/all-doctors', authAdmin, allDoctors);
adminRouter.post('/change-availability', authAdmin, changeAvailability);
adminRouter.get('/appointments', authAdmin, appointmentsAdmin);
adminRouter.post('/cancel-appointment', authAdmin, appointmentCancelled);
adminRouter.get('/dashboard', authAdmin, adminDashboard);

export default adminRouter;