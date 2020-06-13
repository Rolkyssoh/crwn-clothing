import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase();

firestore.collection('users').doc('IE03YXizUwKCob91jqYg').collection('cartItems').doc('WizwPGFYIntzayvJ1rEw');
firestore.doc('/users/IE03YXizUwKCob91jqYg/cartItems/WizwPGFYIntzayvJ1rEw');
firestore.collection('/users/IE03YXizUwKCob91jqYg/cartItems')