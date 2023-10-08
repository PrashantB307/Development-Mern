import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import NotFoundContact from "./components/NotFoundContact";


const App = () => {
  const [contacts, setContacts] = useState([]);

  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactReff = collection(db, "contacts");

        onSnapshot(contactReff, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });

          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactReff = collection(db, "contacts");

    onSnapshot(contactReff, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) => 
        contact.Name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);
      return filteredContacts;
    });
  };

  return (
    <>
      <div className=" mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
          
          <AiFillPlusCircle
            onClick={onOpen}
            className="cursor-pointer text-5xl text-white "
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.length <= 0 ? (<NotFoundContact/>) :  contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
