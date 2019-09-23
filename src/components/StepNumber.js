// @flow
import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

type Props = {
	currentStepNumber: number
};

const stepBackground = [ '#FF5C86', '#B06AEA', '#5B9EF2' ];

const StepNumber = ({ currentStepNumber }: Props) => (
	<View
		style={[
			styles.stepNumber,
			{ backgroundColor: stepBackground[(currentStepNumber - 1) % stepBackground.length] }
		]}
	>
		<Text style={[ styles.stepNumberText ]}>{currentStepNumber}</Text>
	</View>
);

export default StepNumber;
