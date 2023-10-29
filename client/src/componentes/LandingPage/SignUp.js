import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const steps = [
  {
    label: 'Información de la familia',
    description: 'Por favor, proporcione información sobre su familia.',
    fields: [
      { label: 'Cantidad de comidas en casa', stateName: 'comidasEnCasa' },
      { label: 'Número de miembros en la familia', stateName: 'miembrosFamilia' },
    ],
  },
  {
    label: 'Información personal',
    description: 'Por favor, proporcione información personal para cada miembro de la familia.',
    fields: [
      { label: 'Kilogramos', stateName: 'kilogramos' },
      { label: 'Altura', stateName: 'altura' },
      { label: 'Edad', stateName: 'edad' },
      { label: 'Sexo', stateName: 'sexo' },
    ],
  },
  {
    label: 'Nombre de la comida',
    description: 'Por favor, ingrese el nombre de la comida.',
  },
];

export default function SignUp() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    comidasEnCasa: '',
    miembrosFamilia: '',
  });
  const [familyMembers, setFamilyMembers] = React.useState([]);
  const [foodName, setFoodName] = React.useState('');

  const handleNext = () => {
    if (activeStep === 0) {
      // Handle the first step here
      setActiveStep(1);
    } else if (activeStep === 1) {
      // Handle the second step here
      setActiveStep(2);
      setFamilyMembers(new Array(Number(formData.miembrosFamilia)).fill({}));
    } else if (activeStep === 2) {
      // Handle the third step here
      setActiveStep(3);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleFamilyMemberChange = (index, fieldName, value) => {
    const updatedFamilyMembers = [...familyMembers];
    updatedFamilyMembers[index] = { ...updatedFamilyMembers[index], [fieldName]: value };
    setFamilyMembers(updatedFamilyMembers);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              {index === 0 && (
                <div>
                  {step.fields.map((field, fieldIndex) => (
                    <TextField
                      key={fieldIndex}
                      label={field.label}
                      value={formData[field.stateName]}
                      onChange={(e) => setFormData({ ...formData, [field.stateName]: e.target.value })}
                      fullWidth
                    />
                  ))}
                </div>
              )}
              {index === 1 && (
                <div>
                  {familyMembers.map((member, memberIndex) => (
                    <div key={memberIndex}>
                      {step.fields.map((field, fieldIndex) => (
                        <TextField
                          key={fieldIndex}
                          label={`Miembro ${memberIndex + 1} - ${field.label}`}
                          value={member[field.stateName] || ''}
                          onChange={(e) => handleFamilyMemberChange(memberIndex, field.stateName, e.target.value)}
                          fullWidth
                        />
                      ))}
                    </div>
                  ))}
                </div>
              )}
              {index === 2 && (
                <div>
                  <TextField
                    label="Nombre de la comida"
                    value={foodName}
                    onChange={(e) => setFoodName(e.target.value)}
                    fullWidth
                  />
                </div>
              )}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}