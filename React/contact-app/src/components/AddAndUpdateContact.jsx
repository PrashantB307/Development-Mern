import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";


const contactSchemaValidation = Yup.object().shape({
  Name: Yup.string().required("* Name is Required"),
  Mobile_No: Yup.number().required("* Mobile No. is Required"),
});

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  
  const addContact = async (contact) => {
    try {
      const contactReff = collection(db, "contacts");
      await addDoc(contactReff, contact);
      onClose();
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  
};

export default AddAndUpdateContact;
