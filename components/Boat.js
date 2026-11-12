import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Boat = ({ name, description, icon_name, icon_colour, poster }) => {
    return (
        <View style={styles.card}>
            {/* Image Container with Absolute Flex Badge */}
            <View style={styles.imageContainer}>
                <Image source={poster} style={styles.image} />
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>AVAILABLE</Text>
                </View>
            </View>

            {/* Content Container */}
            <View style={styles.content}>
                {/* Flexbox Row: Icon + Name aligned */}
                <View style={styles.titleRow}>
                    <View style={styles.iconWrapper}>
                        <FontAwesome6 name={icon_name} size={20} color={icon_colour} />
                    </View>
                    <Text style={styles.titleText}>{name}</Text>
                </View>

                {/* Subtle Divider */}
                <View style={styles.divider} />

                {/* Description */}
                <Text style={styles.descriptionText}>
                    {description}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        marginBottom: 24,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        shadowColor: '#0F172A',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 5,
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 220,
        resizeMode: 'cover',
    },
    badge: {
        position: 'absolute',
        top: 12,
        right: 12,
        backgroundColor: 'rgba(15, 23, 42, 0.85)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    badgeText: {
        color: '#ffffff',
        fontSize: 10,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    content: {
        padding: 18,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    iconWrapper: {
        width: 36,
        height: 36,
        borderRadius: 8,
        backgroundColor: '#e3e7e8',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#2d465a',
    },
    titleText: {
        fontSize: 18,
        fontWeight: '800',
        color: '#0F172A',
        flex: 1,
    },
    divider: {
        height: 1,
        backgroundColor: '#c0c6ca',
        marginVertical: 8,
    },
    descriptionText: {
        fontSize: 13.5,
        color: '#475569',
        lineHeight: 20,
    },
});

export default Boat;