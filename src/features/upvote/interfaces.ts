import React from "react";

export interface UpvoteItemProps {
    up: (event: React.MouseEvent<any>) => void,
    down: (event: React.MouseEvent<any>) => void
}

export interface FeatureType {
    id: number;
    subject: string;
    description: string;
}

export interface FeaturesType {
    [index: number]: FeatureType
}