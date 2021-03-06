/*:
@author LunaTechs - Kino
@plugindesc A plugin that adds a social system to RPGMakerMV/MZ <LunaSocialSys>.

@target MV MZ


@param socialSystemTitle
@text Social System Title
@desc The title text in the social system scene.
@default Contact Book


@param backgroundPicture
@text Background Picture
@desc The name of the background image in the social system scene.
@default Translucent

@param maxColumns
@text Max Columns
@desc The number of columns in the map list window.
@default 2

@param gaugeHeight
@text Gauge Height
@desc The height of the gauge in the social system scenes.
@default 35

@param gaugeColor1
@text GaugeColor1
@desc Color of the gauge when someone likes you; uses window text colors.
@default 3

@param gaugeColor2
@text GaugeColor2
@desc Second color of the gauge when someone likes you; uses window text colors.
@default 27

@param negativeGaugeColor1
@text Negative Gauge Color 2
@desc The color of the gauge when someone dislikes you.
@default

@param negativeGaugeColor2
@text Negative Gauge Color 2
@desc Second color of the gauge when someone dislikes you.
@default

@help
==== How To Use ====

 Note: contactId is the same as the eventId on that map.
 
 LunaSocialSys.setContactDescription(contactName, description)
  - Update/change the contact description you entered.
  
 LunaSocialSys.getContactDescription(contactName)
  - Returns the contact description (can store in a game variable).
  
 LunaSocialSys.setContactSocialRate(contactName, rate) 
 - Adjusts the socialMeter 0 - 100
 
 LunaSocialSys.updateContactSocialRate(contactName, value)
 - Add/Subtract the social rate by some value (converted to decimal).
 - You can enter negative or positive numbers.
    
 LunaSocialSys.getContactSocialRate(contactName)
 - Returns the contact social rate (can store this in a game variable).
  Note: It will be between 0 - 100; it won't be in decimal format.

 LunaSocialSys.startSocialSystemScene()
  - Starts the social System scene.
MIT License
Copyright (c) 2020 LunaTechsDev
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE
*/




