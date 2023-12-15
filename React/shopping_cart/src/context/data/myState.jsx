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

  const addProduct = async () => {
    
    setLoading(true)
    
    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      return toast.error("Please Fill All Fields.")
    }

    try {
      const productRef = collection(firedb, 'products');
      await addDoc(productRef, products)
      toast.success("Product Added Successfully");

      setTimeout( () => {
        window.location.href = '/dashboard'
      }, 800);
      
      getProductData();
      setLoading(false)

    } catch (error) {
      console.log(error);  
      setLoading(false) 
    }

  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [product, setProduct] = useState([]);

  //  =====================>   Get Product    <====================

  const getProductData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(firedb, 'products'),
        orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray)
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect( () => {
    getProductData();
  }, [])

  
  //====================>    Update Product Function      <========================

  const edithandle = (item) => {
    setProducts(item);
  }

  const updateProduct = async () => {

    setLoading(true)

    try {
      
      await setDoc(doc(firedb, 'products', products.id), products)
      toast.success("Product Updated SuccessFully");
      setTimeout( () => {
        window.location.href = '/dashboard'
      }, 800);
      getProductData();
      setLoading(false)

    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

   
  
}

export default myState;
