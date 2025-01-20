import { useState } from 'react';
import ConfigurationStep from './ConfigurationStep';
import { Reader } from './Reader';
import TextInputStep from './TextInputStep';


type WorkflowStep = 'input' | 'config' | 'reader';

interface ConfigOptions {
  frequency: number;
  viewMode: "word" | "phrase";
  phraseLength: number;
  fontSize: number;
}

const DEFAULT_CONFIG: ConfigOptions = {
  frequency: 500,
  viewMode: "word",
  phraseLength: 3,
  fontSize: 24
};

const WorkflowContainer = () => {
  const [currentStep, setCurrentStep] = useState<WorkflowStep>('input');
  const [inputText, setInputText] = useState<string>('');
  const [config, setConfig] = useState<ConfigOptions>(DEFAULT_CONFIG);

  const handleTextInput = (text: string) => {
    setInputText(text);
    setCurrentStep('config');
  };

  const handleConfig = (newConfig: ConfigOptions) => {
    setConfig(newConfig);
    setCurrentStep('reader');
  };

  const handleBack = () => {
    switch (currentStep) {
      case 'config':
        setCurrentStep('input');
        break;
      case 'reader':
        setCurrentStep('config');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {currentStep === 'input' && (
        <TextInputStep onNext={handleTextInput} />
      )}
      
      {currentStep === 'config' && (
        <ConfigurationStep 
          onNext={handleConfig}
          onBack={handleBack}
        />
      )}

      {currentStep === 'reader' && (
        <div className="max-w-4xl mx-auto">
          <Reader
            inputText={inputText}
            frequency={config.frequency}
            phraseLength={config.phraseLength}
            viewMode={config.viewMode}
            fontSize={config.fontSize}
            onBack={handleBack}
          />
        </div>
      )}
    </div>
  );
};

export default WorkflowContainer;