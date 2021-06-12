import {useRouteMatch} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {FeaturesType, FeatureType} from './interfaces';

export const useFeaturesLoading = () => {
    const {params} = useRouteMatch();
    const [features, setFeaturesState] = useState<FeaturesType>([]);
    const [isLoading, setLoadingState] = useState(false);

    useEffect(
        () => {
            setLoadingState(true);
            fetch(`http://localhost:5000/features/`)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    return Promise.reject();
                })
                .then((fetchedFeatures) => {
                    setFeaturesState(fetchedFeatures);
                })
                .finally(() => {
                    setLoadingState(false);
                });
        },
        [params],
    );

    return {
        features,
        isLoading,
    };
}