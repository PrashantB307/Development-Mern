/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import myContext from './myContext';
import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { firedb } from "../../firebase/FirebaseConfig";

function myState(props) {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [mode, setmode] = useState('light');

  const toggleMode = () => {
    if(mode == 'light'){
      setmode('dark');
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    }else{
      setmode('light');
      document.body.style.backgroundColor = "white";
    }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  });

  // =====================>    Add Product Section    <=========================

  
}

export default myState;
