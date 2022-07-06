import React, {useState} from 'react';
import { Text, ImageBackground, Image,  StyleSheet, View } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';


import Screen from '../components/Screen';
import colors from '../config/colors';
import AppText from '../components/AppText'
import HomeScreen from './HomeScreen';


const slides = [
    {
        id: 1,
        image: require('../assets/onboarding/ezgif1.png'),
        backgroundColor: '#0E2050',
        title: "Order From Smart",
        subTitle: "Now You Can Order For Your Favorite Champions League Club Kits"
    },
    {
        id: 2,
        image: require('../assets/onboarding/ezgif2.png'),
        backgroundColor: '#0E2050',
        title: "Easy Payment",
        subTitle: "Pay Easily Online Or Chose Our Pay On Delivery Option"
    },
    {
        id: 3,
        image: require('../assets/onboarding/ezgif3.png'),
        backgroundColor: '#0E2050',
        title: "Easy Delivery",
        subTitle: "Get Your Orders Delivered To Your Door Step",
    }
]

function OnboardingScreen(props) {
    const [showRealApp, setShowRealApp] = useState(false)

    const onDone = () => {
        setShowRealApp(true)
    }
    const onSkip = () => {
        setShowRealApp(true)
    }

    const RenderItem = ({item}) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingBottom: 100,
                }}
            >
                <View style={styles.header}>
                    <Image style={styles.logo} source={item.image} />
                    <AppText style={styles.title}> {item.title} </AppText>
                    <AppText style={styles.subTitle}> {item.subTitle} </AppText>
                </View>
            </View>
        )
    }

 

    return (
       <>
        {showRealApp ? (
          
            <HomeScreen/>
           
        ) : (
            <AppIntroSlider 
                data={slides}
                renderItem={RenderItem}
                onDone={onDone}
                showSkipButton={true}
                onSkip={onSkip}
            />
        )}
       </>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
        
    },
    header: {
        position: "absolute",
        top: 90,
        alignItems: 'center'
    },
    title: {
        color: colors.white,
        fontWeight: '700',
        fontSize: 30
    },
    subTitle: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 25,
        textAlign: 'center',
        paddingVertical: 30
    }
})

export default OnboardingScreen;