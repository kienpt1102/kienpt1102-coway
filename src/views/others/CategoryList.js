import React from 'react';
import {
    View, Text, StyleSheet,
    TouchableOpacity, FlatList,
    Image,
} from 'react-native';
import COLORS from '../../consts/colors';
import categories from '../../consts/categories';
import p1 from '../../consts/p1';

const CategoryList = () => {
    const Card1 = ({ p }) => {
        return (
            <View style={styles.card1}>
                <Image
                    style={styles.image}
                    source={p.image}
                />
            </View>
        );
    };

    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

    return (
        <View style={styles.categoryContainer}>
            {categories.map((category, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={0.8}
                    onPress={() => setSelectedCategoryIndex(index)}
                >
                    <View style={{ height: '90%', width: 120, alignItems: 'center', paddingHorizontal: 20, marginTop: 10, justifyContent: 'space-between' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{
                                ...styles.categoryListText,
                                color: selectedCategoryIndex == index
                                    ? COLORS.primary
                                    : COLORS.grey,
                            }}>
                                {category.name}
                            </Text>

                            <Text style={{
                                marginTop: 5,
                                color: selectedCategoryIndex == index
                                    ? COLORS.primary
                                    : COLORS.grey,
                            }}>
                                {category.details}
                            </Text>
                        </View>
                        {selectedCategoryIndex == index && (
                            <View style={{ height: 2, width: 50, backgroundColor: COLORS.primary, }} />
                        )}
                    </View>
                    {/* 
                    <FlatList
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ marginTop: 30, paddingBottom: 30, marginHorizontal: 10 }}
                        numColumns={2}
                        data={p1}
                        renderItem={({ item, index }) => <Card1 p={item} index={index} />
                        }
                    /> */}
                </TouchableOpacity>
            ))}
        </View>
    );;
};

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    categoryListText: {
        fontSize: 18, fontWeight: 'bold',
    },
})

export default CategoryList;








