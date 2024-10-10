"use client"
import React, { useState } from 'react';
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import CircularMotionWaveSimulationComponent from '../components/circular-motion-wave-simulation';
import WaveInterferenceCircularMotion from '../components/wave-interference-circular-motion'
import CombinedSimulation from '../components/wave-motion/wave-motion'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM04DHJP4cttqBxjoyM_kSMwn7mrBUCF0",
  authDomain: "physics-wave-app.firebaseapp.com",
  projectId: "physics-wave-app",
  storageBucket: "physics-wave-app.appspot.com",
  messagingSenderId: "259449018912",
  appId: "1:259449018912:web:b06e54a7a5514ea0543a45",
  measurementId: "G-H8FFGGYMS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function Page() {
  const [selectedPage, setSelectedPage] = useState<'circular' | 'interference' | 'waveMotion' | 'waveReflection'>('circular');

  return (
    <>
      <Card className="">
        <CardContent className="p-2 bg-stone-300">
          <div className="flex justify-center space-x-2">
            <Button 
              onClick={() => setSelectedPage('waveMotion')}
              variant={selectedPage === 'waveMotion' ? 'outline' : 'default'}
            >
              波の干渉シミュレーション
            </Button>                     
            <Button 
              onClick={() => setSelectedPage('circular')}
              variant={selectedPage === 'circular' ? 'outline' : 'default'}
            >
              単振動と等速円運動
            </Button>
            <Button 
              onClick={() => setSelectedPage('interference')}
              variant={selectedPage === 'interference' ? 'outline' : 'default'}
            >
              波の干渉と円運動
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Suspenseを削除し、通常のレンダリング */}
      {selectedPage === 'circular' && <CircularMotionWaveSimulationComponent />}
      {selectedPage === 'interference' && <WaveInterferenceCircularMotion />}
      {selectedPage === 'waveMotion' && <CombinedSimulation />}
    </>
  );
}
