export const customStyles = {
  stepIndicatorSize: 14,
  currentStepIndicatorSize: 14,
  separatorStrokeWidth: 3,
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
  stepIndicatorLabelFinishedColor: '#aaaaaa',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
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
    size: 16,
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
      iconConfig.color = stepStatus === 'finished' ? '#FFFFFF' : '#39ff14';
      iconConfig.size = 16;
      break;
    }
    default: {
      break;
    }
  }
  return iconConfig;
};
