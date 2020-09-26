export  const customStyles = {
    stepIndicatorSize: 20,
    currentStepIndicatorSize:25,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 0,
    stepStrokeCurrentColor: '#00B396',
    stepStrokeWidth: 0,
    stepStrokeFinishedColor: '#00B396',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#00B396',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#00B396',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 15,
    //currentStepIndicatorLabelFontSize: 13,
    //stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#aaaaaa',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    renderStepIndicator: 'keyboard-backspace',
    renderLabel: 'keyboard-backspace',
    labelSize: 13,
    currentStepLabelColor: '#fe7013',
    // setCurrentPosition:{currentPosition: +1}
};

export const getStepIndicatorIconConfig = ({
    position,
    stepStatus,
  }: {
    position: number;
    stepStatus: string;
  }) => {
  const iconConfig = {
    name: 'feed',
    color: stepStatus === 'finished' ? '#00B396' : '#aaaaaa',
    size: 20,
  };
  switch (position) {
    case 0: {
      iconConfig.name = 'lens';
      break;
    }
    case 1: {
      iconConfig.name = 'lens';
      break;
    }
    case 2: {
      iconConfig.name = 'check-circle';
      iconConfig.color = stepStatus === 'finished' ? '#FFFFFF' : '#4CAF50';
      break;
    }
    default: {
      break;
    }
  }
  return iconConfig;
};