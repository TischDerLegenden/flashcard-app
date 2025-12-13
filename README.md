# What is this Flaschcard app?
A simple web application for practising various topics with customizable flashcards, developed my myself as a hobby.
> [Access the website](https://tischderlegenden.github.io/flashcard-app/)



## What makes us (me) stand out?

**My app is:**
* Lightweight
* Free
* Simple
* Easy to use
* supporst JSON card-lists




# How to use
Uppon entering the site you will be greeted by the flashcard testing interface. Before you can start testing yourself, you need to input the actual flashcards. Press the ```choose cards``` Button in your navbar at the top of your screen. (If you are on mobite, tap the three dots ```⋮``` at the top right first) You will be redirected to the input screen. Then, input your JSON into the textarea, formatted as following:

``` JSON
[
    {
        "front": "FRONT OF THE FIST FLASHCARD"
        "back": "BACK OF THE FIST FLASHCARD"
    },
    {
        "front": "FRONT OF THE SECOND FLASHCARD"
        "back": "BACK OF THE SECOND FLASHCARD"
    }
]
```
You can add as many cards as you want, although make sure to add commas but no trailing commas (comma at the last card).

Now you can return to the testing interface, by now pressing the  ```Test yourself``` butten in your navbar. If everything worked as expected, you should see the front of your first flashcard. Now everything should be self explanatory. 

Use ```flip``` to flip the card, and ```Mark known``` ```Mark unknown``` to track, how many cards you got correct. You can see that in the chart, which is hopefully being drawn correctly.

Below the chart there are three buttons. ```Review Incorrect``` will directly restart the testing process, but only with the cards you marked wrong. ```Copy incorrect``` will copy the cards marked as incorrect to the clipboard. ```Download incorrect``` will download a JSON file, containing the incoorect cards.

<hr>

### Why am I called TischDerLegenden?
shut up