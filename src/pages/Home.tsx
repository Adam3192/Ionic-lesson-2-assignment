import {
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  useIonToast,
} from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'
import './Home.css'

const Home: React.FC = () => {
  const [present] = useIonToast();

  const toppings: string[] = [
    'Pepperoni',
    'Sausage',
    'Extra Cheese',
    'Bell Peppers',
    'Onions',
    'Mushroom',
    'Pineapple',
    'Black Olives',
  ]

  const displayToppings = () => {
    return toppings.map((top) => {
      return (
        <IonItem key={top}>
          <IonLabel>{top}</IonLabel>
          <IonCheckbox></IonCheckbox>
        </IonItem>
      )
    })
  }

  const orderNow = () => {
    present({
        color: 'dark',
        position: 'top',
        message: 'Order clicked',
        duration: 2000            
    });
  }

  return (
    <IonPage>
      <IonHeader className="header">
        <IonToolbar color="success">
          <IonTitle>Order Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1>Enter your order details</h1>
        <IonItem>
          <IonLabel position="floating">Name</IonLabel>
          <IonInput placeholder="Enter Name"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Phone Number</IonLabel>
          <IonInput type="tel" placeholder="Enter phone number"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Pizza Size</IonLabel>
          <IonSelect placeholder="Select Size">
            <IonSelectOption value="Small">Small</IonSelectOption>
            <IonSelectOption value="Medium">Medium</IonSelectOption>
            <IonSelectOption value="Large">Large</IonSelectOption>
            <IonSelectOption value="Extra Large">Extra Large</IonSelectOption>
          </IonSelect>
        </IonItem>
        <br></br>
        <br></br>
        <IonList>
          <IonListHeader>
            <IonLabel>Select Toppings</IonLabel>
          </IonListHeader>
          {displayToppings()}
        </IonList>
        <IonButton onClick={ orderNow } expand="block" color="danger">Order Now</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Home
