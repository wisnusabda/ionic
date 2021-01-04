import React from 'react';
import './ExploreContainer.css';
import { IonContent, IonBadge, IonLabel, IonTitle, IonButton } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonContent>
      <IonTitle>This Is Label</IonTitle>
      <IonLabel>Mail</IonLabel>
      <IonBadge color="danger">99+</IonBadge>
      <br>
      </br>
      <br>
      </br>
      <IonButton expand="block" color="secondary">Full Button</IonButton>
    </IonContent>
  );
};

export default ExploreContainer;
