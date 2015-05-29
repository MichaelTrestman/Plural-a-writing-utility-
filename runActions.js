function runActions(keysDown){
  if (!keysDown.base){
    console.log('no action');
    return null;
  } else {
    if (keysDown.save){
      console.log('save!');
      handleCommand.save();
      return;
    }
  }
  console.log('still no action');
  return;
}