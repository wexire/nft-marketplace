import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";
import { SubInfo, CircleButton, NFTTitle, EthPrice } from "./index";
import { RectButton } from "./Button";

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
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() =>
              navigation.navigate("Details" as never, { data } as never)
            }
          />
        </View>
      </View>
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
