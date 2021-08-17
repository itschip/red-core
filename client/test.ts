import { Controls } from '../types/controls';
import PromptGroup from '@lib/prompts';

const barPrompts = new PromptGroup('Bar');
barPrompts.createPrompt('Drink beer', Controls.InputLoot);
barPrompts.createPrompt('Throw beer', Controls.InputFrontendAccept);

RegisterCommand(
  'enablebar',
  () => {
    barPrompts.show();
  },
  false,
);

RegisterCommand(
  'disablebar',
  () => {
    barPrompts.hide();
  },
  false,
);
