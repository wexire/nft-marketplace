import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { assets, COLORS, SHADOWS, SIZES } from "../constants";
import { SubInfo, CircleButton } from "./index";

const NFTCard = ({ data }: { data: NFTCardProp }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton
          imgUrl={assets.heart}
          right={10}
          top={10}
          handlePress={() => {}}
        />
      </View>
      <SubInfo />
    </View>
  );
};

type NFTCardProp = {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: any;
  bids: {
    id: string;
    name: string;
    price: number;
    image: any;
    date: string;
  }[];
};

export default NFTCard;
