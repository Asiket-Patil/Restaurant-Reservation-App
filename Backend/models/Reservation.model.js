import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minLength: [3, "First name must be at least 3 characters"],
        maxLength: [30, "First name must be less than 30 characters"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minLength: [3, "Last name must be at least 3 characters"],
        maxLength: [30, "Last name must be less than 30 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        minLength: [10, "Phone number must be at least 10 characters"],
        maxLength: [15, "Phone number must be less than 15 characters"]
    },
    time: {
        type: String,
        required: [true, "Time is required"]
    },
    date: {
        type: String,
        required: [true, "Date is required"]
    }
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
