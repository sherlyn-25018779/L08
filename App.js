import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Boat from './components/Boat';

class AllBoats extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                {/* Creative Header Banner */}
                <View style={styles.headerCard}>
                    <View style={styles.accentBar} />
                    <Text style={styles.headerTitle}>GETABOAT</Text>
                    <Text style={styles.headerSubtitle}>Curated Luxury Fleet • For Sale</Text>
                </View>

                <Boat
                    name={"Sea Ray 500 Sundancer"}
                    description={"Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."}
                    icon_name={"sailboat"}
                    icon_colour={"#1E293B"}
                    poster={require("./img/sea_ray.jpg")}
                />
                <Boat
                    name={"Four Winns Horizon 180"}
                    description={"A sporty look and refined details truly set the Horizon 180 above all others."}
                    icon_name={"ship"}
                    icon_colour={"#1E293B"}
                    poster={require("./img/four_winns.jpg")}
                />
                <Boat
                    name={"Flipper 640 ST"}
                    description={"A modern take on the classic, traditional hardtop and perfect for a family picnic."}
                    icon_name={"sailboat"}
                    icon_colour={"#1E293B"}
                    poster={require("./img/flipper.jpg")}
                />
                <Boat
                    name={"Princess V48"}
                    description={"There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."}
                    icon_name={"ship"}
                    icon_colour={"#1E293B"}
                    poster={require("./img/princess.jpg")}
                />
                <Boat
                    name={"Bayliner 175 Bowrider"}
                    description={"Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."}
                    icon_name={"sailboat"}
                    icon_colour={"#1E293B"}
                    poster={require("./img/bayliner.jpg")}
                />
                <Boat
                    name={"Fairline Targa 47"}
                    description={"Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."}
                    icon_name={"ship"}
                    icon_colour={"#1E293B"}
                    poster={require("./img/fairline.jpg")}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F6F8',
        padding: 16,
        paddingTop: 50,
    },
    headerCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        marginBottom: 24,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        shadowColor: '#1E293B',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 3,
    },
    accentBar: {
        width: 40,
        height: 4,
        backgroundColor: '#1E293B',
        borderRadius: 2,
        marginBottom: 10,
    },
    headerTitle: {
        color: '#1E293B', // Navy text
        fontSize: 22,
        fontWeight: '900',
        letterSpacing: 1.5,
    },
    headerSubtitle: {
        color: '#64748B',
        fontSize: 12,
        marginTop: 4,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});

export default AllBoats;