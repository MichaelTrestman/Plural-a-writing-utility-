function runActions(keysDown, activePlural_id, textContent)
{
  if (!keysDown.base){
    console.log('no action');
    return null;
  } else {
    if (keysDown.save){
      console.log('save!');
      handleCommand.save(activePlural_id, textContent.selection);
      return;
    }
  }
  console.log('still no action');
  return;
}