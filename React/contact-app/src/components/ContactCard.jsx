import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact from "../components/AddAndUpdateContact";
// import {  useDisclouse } from "react";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";

