function runActions(keysDown, activePlural_id, textContent)
{
  feedback = {};
  if (!keysDown.base){
    console.log('no action');
    return null;
  } else {
    if (keysDown.save){
      console.log('save!');
      handleCommand.save(activePlural_id, textContent);
      feedback.isNewTag = true;
    }
  }
  console.log('still no action');
  return feedback;
}