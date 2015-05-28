right so instead of stupid using the dom as a model, just make a model.

the basic unit is a plural--a set of alternative versions of a chunk of text.  so basically you just have a text that you're working on and you can version specific chunks, pushing them into an array. you can then wander off and come back and still have that whole array. don't have to decide in the moment. creation and refinement can be separated in time.

how does this work in practice?

you have a big text field obvs. then you also need a <p></p> to hold the positions and stuff with tags. so basically when you're working on your text, you can create a plural by picking a starting and ending point in your text. this will create a new plural object if there isn't one active alredy, and create a single version attribute for it, which is type string. (or really, a text cell in the db). a plural object is a collection of these; that's really it. it is crudable; you can save versions and switch between which version is currently rendered in the text.  so just like that  so there's just the live text and plurals. the trick is that ~{ the live text has to have markers for the plurals}~. or does it...?  At any point in time, at most one plural will be active. there are hot keys for the plural: switching to an existing version, save new version, delete current version. so i guess there's a sidebar where you can see the different verisons for the current plural. there also needs to be a way of indicating which plural is active, but how can you do that in the textfield, you can't style it with css... you may need to start with a split screen just to have a visualization of the plural that's separate from the textfield. not the end of the world. you can make it a markdown renderer too...  so then you need three panels visually: a text input, rendered text output, and a ul of versions for the current plural. maybe you don't even need to have in-text markers in the text-field then, you can just have them in the rendered output.


so like if you hover over the span with class `plural PLURAL_ID` it activates the plural with the corresponding id. this means the variants of the plural are loaded up.

when a plural gets loaded up:


* its variants get put into li elements in the variant list
* it is visually tagged as active on the textOutput pane.
* variant-switching hotkeys are primed to switch through its variants, save or delete

clicking on an li element from the active plural's variant list activates it--this changes the text in both textInput and textOutput

clicking save:
  * if a plural is active
    * if the current selection is the same as a saved variant of the active plural
      * saves the curent text selection as a new variant of the active plural
    * if the current selection is not the same as any saved variant for that plural
      * creates a new plural and makes it active
        * saves the current text selection as a new variant of the active plural

right so we also need some indication of the current state--if a variant is active or if the text is out of any existing variant, which plural is active (on the text), etc.