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

  
}

export default myState;
