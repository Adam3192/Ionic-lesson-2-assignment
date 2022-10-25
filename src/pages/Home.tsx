import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'
import './Home.css'

const Home: React.FC = () => {
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
      </IonContent>
    </IonPage>
  )
}

export default Home
