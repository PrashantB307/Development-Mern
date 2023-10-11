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

  const updateContact = async (contact, id) => {
    try {
      const contactReff = doc(db, "contacts", id);
      await updateDoc(contactReff, contact);
      onClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  Name: contact.Name,
                  Mobile_No: contact.Mobile_No,
                }
              : {
                  Name: "",
                  Mobile_No: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
