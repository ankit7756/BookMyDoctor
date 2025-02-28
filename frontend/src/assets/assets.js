import appointment_img from './appointment_img.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import BookMyDoctorLogo from './BookMyDoctorLogo.png'
import qrLogo from './official_paymentqr.jpg'
import eSewaLogo from './eSewa_logo.png'
import elon from './Elon_Musk.jpg'
import grpDoctors from './grp_doctors.png'


export const assets = {
    appointment_img,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    BookMyDoctorLogo,
    qrLogo,
    eSewaLogo,
    elon,
    grpDoctors
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Ankit Sharma',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS, MD',
        experience: '7 Years',
        about: 'Dr. Ankit Sharma is dedicated to providing holistic healthcare with a focus on preventive care and patient education. He excels in managing chronic illnesses and promoting overall wellness.',
        fees: 700,
        address: {
            line1: 'Boudha, Tusal',
            line2: 'Kathmandu, Nepal'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Sishir Acharya',
        password: 'dubois123',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS, DGO',
        experience: '5 Years',
        about: 'Dr. Sishir specializes in women’s reproductive health, offering compassionate care in prenatal, postnatal, and gynecological issues with a patient-centric approach.',
        fees: 900,
        address: {
            line1: 'Lazimpat',
            line2: 'Kathmandu, Nepal'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Aayush Kaji Dangol',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS, DDVL',
        experience: '3 Years',
        about: 'Dr. Aayush is an expert in skin health, treating conditions like acne, eczema, and pigmentation with advanced dermatological techniques and personalized care.',
        fees: 600,
        address: {
            line1: 'Dillibazar',
            line2: 'Lalitpur, Nepal'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Nirjal Adhakari',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS, DCH',
        experience: '6 Years',
        about: 'Dr. Nirjal Adhakari is passionate about child healthcare, specializing in newborn care, vaccinations, and developmental assessments to ensure healthy growth.',
        fees: 800,
        address: {
            line1: 'Chabahil',
            line2: 'Kathmandu, Nepal'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Binnol Dahal',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '8 Years',
        about: 'Dr. Binnol Dahal focuses on diagnosing and treating neurological disorders like epilepsy, migraines, and strokes with cutting-edge medical expertise.',
        fees: 1200,
        address: {
            line1: 'Dharan Bazar',
            line2: 'Sunsari, Nepal'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Sanjay Patel',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS, MD (Neurology)',
        experience: '9 Years',
        about: 'Dr. Sanjay Patel brings extensive experience in managing complex neurological conditions, emphasizing patient comfort and advanced therapeutic techniques.',
        fees: 1300,
        address: {
            line1: 'MG Road',
            line2: 'Mumbai, India'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Srijana Shrestha',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Dr. Srijana Shrestha provides comprehensive care for acute and chronic conditions, with a strong emphasis on early diagnosis and lifestyle improvement.',
        fees: 650,
        address: {
            line1: 'Baneshwor',
            line2: 'Kathmandu, Nepal'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Rojit Ale Magar',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS, MS (OBGYN)',
        experience: '6 Years',
        about: 'Dr. Rojit is committed to women’s health, offering expertise in high-risk pregnancies, infertility treatments, and minimally invasive surgeries.',
        fees: 950,
        address: {
            line1: 'Pokhara Lakeside',
            line2: 'Kaski, Nepal'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Anjali Gurung',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '4 Years',
        about: 'Dr. Anjali Gurung specializes in cosmetic and clinical dermatology, offering treatments for skin rejuvenation, allergies, and chronic skin diseases.',
        fees: 700,
        address: {
            line1: 'Thamel',
            line2: 'Kathmandu, Nepal'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Liam Carter',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS, MRCPCH',
        experience: '5 Years',
        about: 'Dr. Liam Carter is dedicated to pediatric care, with a focus on childhood nutrition, infectious diseases, and developmental milestones.',
        fees: 850,
        address: {
            line1: '123 Elm Street',
            line2: 'Boston, USA'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Ashley Bieber',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '7 Years',
        about: 'Dr. Ashley Bieber excels in treating disorders of the brain and nervous system, with a focus on patient rehabilitation and innovative therapies.',
        fees: 1100,
        address: {
            line1: '112 Elm Street',
            line2: 'London, England'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Isha Aryal',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS, MD (Neurology)',
        experience: '10 Years',
        about: 'Dr. Isha Aryal is a seasoned neurologist with expertise in neurodegenerative diseases, offering compassionate and evidence-based care.',
        fees: 1400,
        address: {
            line1: 'Jawalakhel',
            line2: 'Lalitpur, Nepal'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Kavita Rai',
        image: doc13,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, DM (Gastroenterology)',
        experience: '8 Years',
        about: 'Dr. Kavita Rai specializes in digestive health, providing advanced care for liver diseases, IBS, and endoscopic procedures with precision.',
        fees: 1000,
        address: {
            line1: 'Butwal',
            line2: 'Rupandehi, Nepal'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Manisha Adhikari',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS, DNB (OBGYN)',
        experience: '4 Years',
        about: 'Dr. Manisha Adhikari offers expert care in women’s reproductive health, focusing on safe deliveries and gynecological surgeries.',
        fees: 800,
        address: {
            line1: 'Koteshwor',
            line2: 'Kathmandu, Nepal'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Pritam Sharma',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS, DDVL',
        experience: '2 Years',
        about: 'Dr. Pritam Sharma is skilled in treating skin conditions and enhancing aesthetics with modern dermatological procedures and care.',
        fees: 550,
        address: {
            line1: 'Civil Lines',
            line2: 'Delhi, India'
        }
    },
]