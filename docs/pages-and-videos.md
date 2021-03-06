---
id: pages-and-videos
title: Pages and videos
---

Watching videos is much more bearable if you double the speed - a feature that someone else only recently pointed out to me. Click on the video's settings cog and change the speed.

RCdiy covers doing a [range check](http://rcdiy.ca/taranis-q-x7-tutorial-first-flight-setup/#Range_Check) via the transmitter - make sure to cover this too.

---

When putting together these pages initially the most useful sites I found were:

* ArduPilot - in particular its [assembly](http://ardupilot.org/copter/docs/common-pixhawk-wiring-and-quick-start.html) and related sections.
* [Pixhawk.org](https://pixhawk.org/)
* RCGroups - in particualr the [multicopter drone forums](https://www.rcgroups.com/aircraft-electric-multirotor-drones-790/).

The [ArduPilot forums](http://discuss.ardupilot.org/) and [PX4 forums](http://discuss.px4.io/) were also useful.

Note: the terms Pixhawk and PX4 are often used interchangeably - though Pixhawk generally refers to the flight controller hardware while PX4 generally refers to the flight controller software stack.

**Update:** much of the information of pixhawk.org was stale and out-of-date - but they seem to have revamped the site since and there's also now lots of very useful information at <https://docs.px4.io/en/>

---

The Painless360 Pixhawk series - <https://www.youtube.com/playlist?list=PLYsWjANuAm4r4idFZY24pP6s1K6ABMU0p>

* Video 1 - lots of talk on Pixhawk vs the older APM. At [9:47](https://www.youtube.com/watch?v=uH2iCRA9G7k&feature=youtu.be&list=PLYsWjANuAm4r4idFZY24pP6s1K6ABMU0p&t=587) it gets on to hooking the plugged together setup up to Mission Planner. Mentions aligning arrows on GPS and Pixhawk. Mentions drivers and using a USB port capable of at least 500mA. At 13:52 he gets onto flashing the latest firmware - the phase where you _don't_ connect, then once that's done you connect and go through the wizard for mandatory hardware configuration. Only when you get to the radio calibration do you need to turn on the TX - when calibrating move the sticks _and_ the mode switches. He just sets up three flight modes - stabilize, loiter and RTL - he says he'll get back to this (and that he's already covered this in a video for APM). He doesn't setup failsafe at this point. Once your done hold it out a window until it gets a GPS fix and then try moving it about and moving the sticks and switches.
* Video 2 - he replaces an existing APM unit on an F450 frame - he's got the flight controller on a vibration damping platform on the top frame plate - I wonder if in an earlier APM video we see how he attached the vibration damping platform to the plate. Note in this video he recommends pulling the red wires out of the ESC connectors and so skip needing a Zener diode. Worth watching - at 4:37 he starts attaching and distributing parts around the frame. At 8:14 he wires in the ESCs to the Pixhawk taking account of CW and CCW. At 9:43 he recommends labelling your ESC connectors 1 to 4, matching the numbering in the ArduCopter Quad X documentation, so you can keep track of them and easily plug them into the Pixhawk. He covers the status LEDs - see [my documentation](pixhawk-leds.md) - print out the LED pictures. Make sure not to have props on when powering up for first time. He powers it up by plugging in the battery then once happy he plugs it into Mission Planner via USB (and presses Connect). He presses the safety switch, arms then ups the throttle. He says if the ESCs don't come on at the same time you need to go through ESC calibration. He notes the reversal of the pitch (tho' it looks as if you do reversal and still see pitch (in radio calibration) moving counter to expected - is this really what's wanted? See 17:05). Once happy he goes outdoors, with props now on and does the same - he notes the lack of Expo. Note: this video shows a vibration damping platform that's nearly identical to the one used in my build but with much larger 3M pads than the ones that came with my platform.
* Video 3 - looks like its all been covered already in my pages. At 4:06 he mentions the pitch flip and seems to confirm that you see the pitch moving oposite to expected _after_ you've applied the correction to the elevator/pitch and this is how things should be. On the mixes page he does actually name things Roll, Pitch etc. (see 4:28). He applies Expo in OpenTX rather than in Mission Planner - at 6:00 he uses 25% on Ail and Ele and 15% on Rud (and 0 on throttle). At 20:52 he sets the failsafe (pushing throttle to zero to make the craft come down) - again via OpenTX rather than Mission Planner - he says he'll cover this later.
* Video 4 is just relevant if you've got a D4R-II and covers upgrading the firmware to change the CPPM period to 27ms so there's time to output all 8 channels.
* Video 5 covers flight modes - it points to the ArduCopter flight modes page. With flight modes there's also simple and super simple options - which equate to headless - and like everyone he discourages their use - although he does say being able to flick into simple or super simple can be nice if the craft is so far away that you've lost orientation (though perhaps RTL is a more obvious option in this situation unless there are obstacles). He recommends stabalize (auto-level) as the initial mode. From 4:32 on is worth watching for a talk-thru of all the modes. Note that you can turn some modes on in combination with others, e.g. alt. hold - this would require a separate switch for such modes though (and channels???). Actually alt. hold is the only one where using it in combination is mentioned.. Alt. hold changes behavior of throttle - essentially it divides the throttle range into three simple fat bands - down, hold, up. He says Land lands better than he can.
* Video 6 - the only immediatelly relevant bit is at [1:13](https://www.youtube.com/watch?v=DKK0jms402Q&feature=youtu.be&t=73) where he briefly shows configuring a low voltage warning in Mission Planner.

TODO: move images/pixhawk-leds/README.md up into same directory as all the other pages.

Some of his APM videos are relevant too:

* Autotrim and autotune - get the flight controller to work out the trim settings and work out the best PID settings - the video <https://www.youtube.com/watch?v=5pqdAOCkz00> and the corresponding ArduCopter pages:
  * AutoTrim <http://ardupilot.org/copter/docs/autotrim.html>
  * AutoTune <http://ardupilot.org/copter/docs/autotune.html>
* MAVLink - he covers updating the radio firmware and trouble shooting the process <https://www.youtube.com/watch?v=uGrsTiJnRVk>
* The full APM 2.6 (with some 3.1 stuff) playlist <https://www.youtube.com/playlist?list=PLYsWjANuAm4oSFdOSBswt6GmU7y6v60O1>

Note: it looks like you can wire up those nasty connectors that the Pixhawk uses without any soldering or crimping - see 3:33 of <https://www.youtube.com/watch?v=uGrsTiJnRVk>

---

Continuity testing the connections on your PDB after finishing soldering [video 5:02](https://www.youtube.com/watch?v=OpwBgGllcwg&t=302) (in German - the auto-translate subtitle aren't bad). Test for both good connections, i.e. hold one probe on the the main plus terminal and then check all ESC plus terminals, and for bad connections, i.e. continue to hold one probe on the main plus terminal and then check all ESC minus terminals. Do the same obviously for the main minus terminal.

Sparkfun on [continuity testing](https://learn.sparkfun.com/tutorials/how-to-use-a-multimeter#continuity).

---

DJI videos:

1. <https://www.youtube.com/watch?v=pUTHIL_Xfcc> - assembling the original F450 kit.
2. <https://www.youtube.com/watch?v=H_Rvi7xQLdw> - assembly with the (then) newer E300 propulsion system (now replaced by the E305). Note: with the F450 you don't have to use the E305 PDB as the bottom plate of the F450 is a PDB.
3. <https://www.youtube.com/watch?v=qJZa7p3rsCU> - installing the Naza M V2 - while I didn't use this flight controller it's interesting to see how everything is fitted in.

Note: according to one of the comments the first "video shows the base plate being mounted sideways. If you want to mount a front facing camera gimbal you should mount the base plate the other way." And someone else comments that "she moves the solder around with the iron and that means there is too little heat and the cable should be still until the solder has gotten hard again ... give a little more heat and hold it still a little longer after removing the heat! Better to use a more powerful soldering iron, then the time to heat it up is less and the heat doesn't go that deep in the board and the conector."

Video 1 is nice and to the point, it shows the whole soldering job but using the older 30A OPTO ESCs where the plus and minus wires of the ESC aren't combined in a single cable (and so you have to be careful not to solder the separate cables so they cover the screw holes of the PDB). It emphasizes getting a robust solder joint with good "wetting". It also shows something called the VU (versatile unit) being soldered to the main power connections - the VU isn't an element of our build. It covers continuity testing and covering the solder points with hot glue to reduce the risk of shorts (something DJI's PDF manual just refers to in passing, telling you to use some kind of "insulating method at all solder spots"). Mounting the motors and the ESCs to the arms and bolting the arms to the PDB is also covered. The ESCs are simply held onto the undersides of the arms with a single cable tie each.

Video 2 shows soldering the ESCs from the newer E300 system to the small E300 PDB - these ESCs now have the plus and minus wires in a single cable just like those in the E305 system used in this build. In this video they spread a small amount of flux on the PDB pads before soldering. Then they add a small amount of solder to each pad, then they really hold each ESC plus and minus wire down on their appropriate pad for a noticeable while before then adding yet more solder on top. They more clearly cover placing CW and CCW motors on the appropriate arms. Unlike the first video the PDB is oriented so the longer sides are the nose and the tail and the red arms are the front facing arms - a configuration that seems common. This video also covers installing the more modern self-tightening propellers.

Video 3 is the least relevant as it covers the installation of DJI flight controller rather than a Pixhawk but it's interesting to see the final assembly involving pieces which aren't covered in the previous videos, including the flight controller, receiver and GPS. In this video you can clearly see the bottom half of velcro strap included in the F450 kit stuck on to the top plate of the frame - something that isn't covered anywhere else. And they emphasize that the GPS must be correctly oriented (arrow facing forward) and they show the mast clearly held on with adhesive rather than with bolts.

DJI user manual PDFs:

* [F450 assembly](http://dl.djicdn.com/downloads/flamewheel/en/F450_User_Manual_v2.2_en.pdf) - includes soldering on ESCs.
* [E305 assembly](http://dl.djicdn.com/downloads/e305/en/E305_User_Manual_v1.00_en.pdf).

The F450 assembly manual is worth reading through quickly but doesn't contain anything surprising. It has nice diagrams for the popeller locking and unlocking. It mentions adding screw glue yourself - which is unnecessary as the screws now all come with screw glue already applied. And it covers the sounds the ESCs can emit to indicate their status. The E305 manual is similar and covers much the same details - but adds how to use the propeller removal clamp.

DJI wiki:

* [F450 assembly](http://wiki.dji.com/en/index.php/Flame_Wheel_F450_Assembly)
* [Motor orientation, mounting and ESCs](http://wiki.dji.com/en/index.php/F450_ESC_and_Motor_Mounting)

The wiki pages add little, if anything, and relate to older versions of the propulsion system etc.

---

Marionville Models (MM) assembly video - <https://www.youtube.com/watch?v=ER2GxMo0X3E>

At 50 minutes this is one of the most comprehensive videos. It does though cover using the DJI Naza flight controller rather than the Pixhawk.

They note that CW motors have a dimple at the tip of the motor shaft while the CCW ones don't and they note that the black hub propellers go with the shafts that have dimples while the silver hub propellers go with the ones without (think black dimple / black propeller). TODO: verify this.

Mounting the propellers before screwing the motors on to the arms looks more trouble than the supposed gain in being able to more easily distinguish CW and CCW motors (and you'll need to take them off anyway for initial motor testing).

Like the second DJI video MM apply flux to the PDB pads. They show that the ground in the ESC cables is actually a coaxial sheath so if you cut the cables shorter you have separate out the wires of the sheath so you can twist them together to form a single ground wire.

In the DJI video they solder the plus and minus ESC wires to the small PDB included with propulsion system, as the MM video points out this is more of a hassle with the F450 PDB where the plus and minus pads are further apart. They tin the ESC wires and show how to handle the issue of the wide apart pins nicely (though each cable ends up lying over a screw hole until twisted out of the way)

They add extra solder after soldering on the power connector as it has far fatter wires than the other connections. They note that the scews already have thread lock (and that this results in a little extra resistance as you screw them in). They use electrical insulation tape rather than a glue gun to cover the solder points. They point out you should remember  to thread the ESC cable through the leg connection points before screwing them to the bottom plate. They note that you shouldn't over tighten the cable ties used for ESCs (otherwise you'll start to distort their casing). They mount the LED module at the rear so you can see the LED as the craft is moving away from you - it'd make sense to mount the external LED and USB module that I have in a similar fashion. DJI mount the battery velcro left to right (which matches up with the power connector sticking out the right) but MM have in going right to left (they say this allows you to e.g. move the battery backwards to compensate for the increased weight at the nose if you add a camera). MM screw down the base of the GPS mast using the outer leg screw points of the top plate - something that won't work out if you mount the vibration damping platform on the top plate.

They discuss the motor to ESC connectors as being AC connectors (check this) and say you can plug them in however you like - then when you do your first power test just swap any two connectors of a given motor if it's turning the wrong direction - yes really just choose any two of the three connectors and swap them. As noted elsewhere (where?) the fact that a CW motor will also run CCW if wired incorrectly doesn't mean they're interchangeable - running CW motors CCW and vice-versa is bad for the motor (have I got a good ref?).

The tidying up of the ESC signal wires (to the flight controller) is nicely done (coiled up together rather than individually) as is the tying of the GPS cable to the mast and coiling up the excess below.

---

See "testing motor spin directions" section of http://ardupilot.org/copter/docs/connect-escs-and-motors.html

---

Assembly pages:

1. [F450 as assembly example](https://pixhawk.org/platforms/multicopters/dji_flamewheel_450) on pixhawk.org.
2. [F450 as assembly example](http://ardupilot.org/copter/docs/dji-f330-flamewheel.html) on ardupilot.org.
3. [Similar thorough walkthru on Quadcopters are Fun](http://quadcoptersarefun.com/2FlamewheelsBuild.html) - uses older PX4 board.
4. [A much less thorough walkthru using the old APM FC](http://diydrones.com/profiles/blogs/using-a-dji-450-flamewheel-quadcopter-with-the-apm) on DIYDrones.
5. [Pukit.com buildlog](http://www.pukit.com/2014/12/16/buildlog-with-dji-f450-flamewheel-naza-v2-and-a-stock-turnigy-9x-transmitter/).

Page 1. is from pixhawk.org and covers a PX4 build (i.e. the Pixhawk's predecessor). Slightly worryingly they suggest doing an initial electrical check after the basic soldering outdoors - so you don't ruin your house if you've got things horribly wrong - simply connect the battery directly to the PDB power connector (rather than via the power module as in the final setup) and listen for the ESCs beeping nicely. If you've done a continuity check on all your soldering and double checked red and black wires are all the right way around there shouldn't be any real potential for disaster. Note they use a different arm numbering convention to earlier videos! They cover checking and correcting motor directions.

TODO: check arm numbering conventions used on Pixhawk and ArduCopter sites - things have to match the numbering on the Pixhawk itself.

Page 2. is from ardupilot.org and covers similar details and is similarly old - covering things like BECs which aren't relevant for our setup. In contrast to DJI and most of the other videos they mount the flight controller on the top plate and install the battery in between the top and bottom plates.

Page 3. comes from QuadcoptersAreFun and shares text and photos with the ArduPilot page - the two pages presumably started from the same content but have diverged over time. This page has been updated with more Pixhawk relevant material and is a bit more coherent than the ArduPilot page but doesn't add anything much.

Page 4. comes from DIYDrones and covers much the same details more concisely but uses the old ArduPilot APM flight controller. Again it covers irrelevant details like using a BEC.

Note: DIYDrones is a forum site established by 3DR and seems to have been the spiritual home of the Pixhawk back in the days when 3DR hadn't yet pivoted in other directions.

Page 5. covers doing a build with the Naza flight controller - it has some nice advise on soldering your joints correctly, i.e. tin your wires, apply the iron to the PDB pads and let the solder melt onto the pads directly, not onto the iron.

---

BECs
----

At least one of the assembly pages above uses a BEC - this is not necessary for my setup according to [this thread](http://diydrones.com/forum/topics/new-pixhawk-with-dji-f450-kit-motors-beeping) (search for BEC).

Might be nice to ask about BECs on DroneTrest, referencing the above DIYDrones thread and this old old [thread](http://www.dronetrest.com/t/what-kit-do-i-need-for-a-diy-quadcopter-using-the-pixhawk-platform/2168) on their own site.

Looking at the Painless360 [video](https://www.youtube.com/watch?v=DKK0jms402Q&t=437) on power options it does look like you don't need a BEC unless you're planning to run e.g. landing gear or camera gimbal servos directly from the Pixhawk, for the ESCs it's not necessary (unless they expect to see 5V on their power/positive lines as is the case with some ESCs).

The 420 Lite ESCs just have ground and signal wires - there's no red positive wire - so there's no issue with unplugging the positive wires and no possibility to use the ESCs as an alternative power source.

---

Zener diode and Pixhawk power:

* [Powering the Pixhawk](http://ardupilot.org/copter/docs/common-powering-the-pixhawk.html) and search down for "zerner".
* More on the same [on DIYDrones](http://diydrones.com/forum/topics/zener-diode-in-pixhawk).

Painless360 has a [full video on power options](https://www.youtube.com/watch?v=DKK0jms402Q&t=459s&list=PLYsWjANuAm4r4idFZY24pP6s1K6ABMU0p&index=6).

However none of this is relevant for the 420 Lite ESCs that come with the E305 because, as noted above, they don't come with a red power wire - so no need for a Zener diode.

---

DroneTrest recommend [this video](https://youtu.be/S-LSZQk1Ya8?t=324) on Taranis plus Mission Planner setup, but skip to 5:24 as most of what it covers looks easier in OpenTX Companion (as covered in the Painless360 series) but it is interesting to see stick calibration etc. for the flight controller and how the flight mode swtiches he configured earlier can be seen acting in Mission Planner. **Update** - this video doesn't cover anything not covered just as well in the Painless360 Pixhawk series.

---

[Nice RCGroups E305 review](https://www.rcgroups.com/forums/showthread.php?2456770-Review-DJI-E305-Tuned-Propulsion-System) - includes lots of pictures and wiring things up to the an F450 frame.

---

In this DroneTrest [build page](http://www.dronetrest.com/t/qav-zmr-250-assembly-build-guide/1244) (for a random quad build) they bend the battery wire back under the velcro battery strap, i.e. it holds both the battery and the battery's connector - so it doesn't just stick straight out the end of the battery leading to a very long battery-combined-with-power-module cable.

---

OpenTX splash screens suitable for the [Q X7](http://www.open-tx.org/screens-9x.html) that are much less exciting than [those](http://www.open-tx.org/screens-taranis.html) for the X9D+ (note the Q X7 doesn't support [model images](http://www.open-tx.org/icons-taranis.html)).

---

Crimping
--------

HobbyKing crimper: https://hobbyking.com/en_us/hobbyking-jst-sh-connector-crimping-tool.html
Video on how precisely to use this type of crimper: https://www.youtube.com/watch?v=MHLz1Mck_Kg
Poster on getting things like the insulation and conductor correctly lined up: https://cdn-shop.adafruit.com/datasheets/JST_CrinpChart+(English).pdf

See also bookmarks on crimping.

---

VHB tape
--------

Very High Bond (VHB) tape is one of the strongest tapes in the world and is intended for industrial, rather than consumer, application and is used as an alternative to rivetting and welding. While bonding very strongly to the materials that it's stuck to, the tape itself is flexible, meaning it can absorb shocks and pressure.

For an interesting look at it see [this video](https://www.youtube.com/watch?v=x0LM6HXMolA) from the BBC's Tommorow's World program showing how they introduded it back in 1985 and then again showed it in the late 90s being used to hold the windows onto the Burj Al Arab hotel in Dubai.

3M produce a number of different varieties - I bought [4611F](https://www.amazon.co.uk/3M-Adhesive-4611F-Temperatures-Metals/dp/B00EDLV24U/), the cheapest variety that's intended only for holding metal to metal, but perhaps a better buy is the slightly more expensive [4941P](https://www.amazon.co.uk/3M-Adhesive-Different-Material-Combinations/dp/B00EDLCS9S/) that's intended for a wider variety of materials.

---

* [Nice F550 wired up picture](https://static.rcgroups.net/forums/attachments/1/4/2/1/a6709904-57-FW550Flying1.jpg)

* [Video overview, but not a tutorial, on flying a Pixhawk controlled drone](https://www.youtube.com/watch?v=SdRZuQiS7G4), includes flight modes like altitude-hold, circling etc.

* Nice overview of [Pixhawk family](https://www.lambdrive.com/depot/Robotics/Controller/PixhawkFamily/index.html) including history, models (classic, SnapDragon etc.), MAVLink and flight stacks and ground controller software.

---

The Pixhawk can output the voltage it sees as telemetry data that can be routed through the RX. However it can't see individual cells. For this you need an [FrSKY FLVSS](http://www.frsky-rc.com/product/pro.php?pro_id=125). Hooking this up directly to the RX, via the Smart Port, and then using this data on the TX for alarms seems easy enough.

Getting this data into the Pixhawk so it can be output via MAVLink seems less clear. The only project I could find around this was [MavLink_FrSkySPort](https://github.com/athertop/MavLink_FrSkySPort/wiki/1.-Setup#combining-teensy-with-frsky-sensors). But it's a bit unclear what the purpose of this project is - it can be used without any additional FrSKY sensors and the stated purpose is to get telemetry data from the Pixhawk to the RX - is this just an open source version of the [Craft & Theory telemetry cable](http://www.craftandtheoryllc.com/product/telemetry-cable-flightdeck-taranis-opentx-ardupilot-arducopter-pixhawk-2-cube-servo-frsky-smartport-smart-port-df13-jst-gh-serial/) or the equivalent that can be cobbled together out of FrSKY parts? If so OK but then it's unclear if the hook up with the FLVSS is just about daisy chaining the two so that both feed into the RX and not about getting the FLVSS data into the Pixhawk. Note: there seem to be multiple active forks of this project - [athertop version](https://github.com/athertop/MavLink_FrSkySPort) claims to be the latest in a series but the earlier [Clooney82 version](https://github.com/Clooney82/MavLink_FrSkySPort) (that's clearly marked as dead and points to the athertop version) has commits that the athertop version does not.

---

User guides covering assembly to flight controller setup etc.:

* [The PX4 guide](https://docs.px4.io/en/).
* [The ArduPilot guide](http://ardupilot.org/copter/docs/introduction.html).

The part covering wiring up the Pixhawk:

* [The PX4 guide](https://docs.px4.io/en/assembly/quick_start_pixhawk.html).
* [The ArduPilot guide](http://ardupilot.org/copter/docs/common-pixhawk-wiring-and-quick-start.html).

Wiring up telemetry (shows ArduPilot at least prefer the X6R and X8R over earlier models like the D4R-II):

* [Telemetry wire for FrSKY receivers](http://ardupilot.org/copter/docs/common-frsky-telemetry.html) plus setup in Mission Planner, OpenTX Companion and on the Taranis (probably a better source than the X8R, but non-Pixhawk specific, Blue Falcon video linked to elsewhere).

The pixhawk.org page on [wiring up telemetry for the D4R-II](https://pixhawk.org/peripherals/telemetry/frsky), note they point non-developers to the uninformative [telemetry page](https://docs.px4.io/en/peripherals/frsky_telemetry.html) in the new user manual (by way of an old archived user manual site).

[ArduPilot GPS wiring up](http://ardupilot.org/copter/docs/common-installing-3dr-ublox-gps-compass-module.html) - not that interesting wiring-wise but covers why you'd use a mast and covers the LEDs - red for power and flashing blue for GPS lock.

Pixhawk.org [overview of the Pixhawk](https://pixhawk.org/modules/pixhawk#specifications) - it's sensors, interfaces etc.
A very similar [overview](http://ardupilot.org/copter/docs/common-pixhawk-overview.html) from ArduPilot.

Setting up [waypoints in Mission Planner](http://ardupilot.org/copter/docs/common-planning-a-mission-with-waypoints-and-events.html#common-planning-a-mission-with-waypoints-and-events).

---

The developer guides:

* [The PX4 guide](https://dev.px4.io/en/).
* [The ArduPilot guide](http://ardupilot.org/dev/).

Note: the PX4 guide covers lots of things that are of interest to an audience beyond core flight controller developers, just look down the TOC - there's lots of high level general information, sections on flight controllers and airframes, tutorials on things like video streaming.

---

Learn to fly
------------

Videos:

* https://www.youtube.com/watch?v=OcxUCepBHkM
* https://www.youtube.com/watch?v=eEKJq9tU85A (what to avoid)
* https://www.youtube.com/watch?v=KRzKkjskhEw
* https://www.youtube.com/watch?v=Nk2h06Ql3cM (trim)

Pages:

* http://uavcoach.com/how-to-fly-a-quadcopter-guide/
* http://newatlas.com/drone-school-3-first-quadcopter-flight-tips-exercises/40910/

---

Antenna placement:

* On RCGroups thread [one](https://www.rcgroups.com/forums/showthread.php?2158458-FrSky-PCB-Antenna-Placement#post28634518) and [two](https://www.rcgroups.com/forums/showthread.php?2177966-FrSky-X8R-antenna-placement).
* FrSKY's [advise](https://fpv-community.de/showthread.php?33264-FrSky-X8R-Antennenposition/page2) on the whole thing.
* Popular [antenna holder](http://www.thingiverse.com/thing:258146) (that matches FrSKY's advise) on Thingverse and a [remix](http://www.thingiverse.com/thing:411491) that doesn't involve a raised arm.

Note: the intention with holder seems to be that the antenna will point upwards - this seems to maximize the changce that the copter body will come between antenna and transmitter but perhaps this is irrelevant if the body is essentially transparent (thought 2.4GHz in general has poor propagation through walls etc.). Mounting it upwards on an arm will bring it closer to the GPS - I don't think this should be an issue - the receiver and the GPS operate on completely different frequencies.

[Antenna mount](https://www.unmannedtechshop.co.uk/pcb-antenna-mount-for-x8r-l9r-v2/) on Unmanned Tech.

The FrSKY [FAQ](https://www.frsky-rc.com/pages/faq-page/) has some questions covering antennas that confirm the 90 degree placement and add other details, e.g. don't mount on metal or carbon and keep aways from ESCs and motors.

I asked a [question on antennas](https://electronics.stackexchange.com/q/321893/27099) on the Electronics StackExchange. I didn't get much feedback but I worked out enough that I'm confident the transmission lines aren't "just" wires, e.g. their length is important, but while they're important in getting signal to and from the antennas they don't contribute to the radiation or reception of the radio signal itself so just the location of the antenna themselves and not the transmission lines is important.

---

Camera mounts:

* [Simple F450 GoPro mount](http://www.thingiverse.com/thing:470945)
* [Multipart GoPro mount](http://www.thingiverse.com/thing:2094289)
* [Anti-jello GoPro mount](http://www.thingiverse.com/thing:92014/#remixes) and an [F450 remix](http://www.thingiverse.com/thing:246168/#files) (crudely done - why do his mounting "squares" protrude into the cetral space?).

I added some of these, plug a couple of gimbal protectors so my Shapeways models:

* https://www.shapeways.com/mymodels

---

As I note in the electronics assembly page I didn't find anything super simple on connecting the X8R to the Pixhawk. In the end the best I found was this [video starting at the 21 second mark](https://www.youtube.com/watch?v=uCcVCM7ajNA&feature=youtu.be&t=21). **Important:** when he plugs the connector into the X8R he plugs in the cable such that the white wire (signal) is on the left and black (ground) is on the right, which is correct, but he clearly says "the signal is on the right side" which is incorrect. In the video he just comments that we use the column of pins on the Pixhawk labelled RC and not the one labelled SB (for S.BUS) but doesn't explain why. The SB labelled pins are meant for S.BUS output, not for taking receiver input (whether in S.BUS format or not).

---

Additional misc links Aug 2017:

Heat gun - links to version available via Sparkfun and Banggood - http://www.propwashed.com/heat-guns-deceptively-useful-tool/

Pixhawk 3:

* F450 example build - https://dev.px4.io/en/airframes_multicopter/dji_flamewheel_450.html
* Pixhawk 3 bundle (&euro;370) - https://drotek.com/shop/en/flight-controllers/844-pixhawk-3-pro-pack.html

Quadcopter orientation - getting your drone back to your when it's gone to far to tell which way it's facing: http://quadcopter101.blogspot.ch/2014/02/flight-school-6-distance-flying-keeping.html

You'll have to look up your own country's rules - about 100m maximum altitude for hobbyist fliers is typical (in the US and the UK it's 120m, in Germany it's 100m and in Switzerland it's 150m).

Hot glue for insulation and support: http://www.instructables.com/id/Using-Hot-Glue-to-Insulate-and-Support-Soldering-J/

Wire coloring schemes by servo manufacturer:

* http://www.robotplatform.com/knowledge/servo/servo_manufacturers.html
* https://learn.sparkfun.com/tutorials/hobby-servo-tutorial

3DR detailed Pixhawk manual: https://3dr.com/wp-content/uploads/2017/03/pixhawk-manual-rev7-1.pdf
3DR detailed build guide for their DIY Quad kit with Pixhawk: https://3dr.com/wp-content/uploads/2017/03/3DR-DIY-Quad-Build-Manual-vA.pdf

Mounting a GPS mast with typical four way screw hole base with tape rather than screws: http://www.thedronesmag.com/install-setup-gpscompass-unit-dji-naza-m-v2/

GPS mounting tips: http://ardupilot.org/copter/docs/common-installing-3dr-ublox-gps-compass-module.html#mounting-the-gps-module

My Electronics StackExchange question on feed lines and antenna: https://electronics.stackexchange.com/q/321893/27099

Hakko distributors worldwide: https://www.hakko.com/world_network.html
Germany: https://tbk-onlineshop.de/produkt/hakko-fx-888d-16-by/

Determining the point at which your battery's voltage drops like a stone: http://diydrones.com/forum/topics/lowest-safe-voltage-per-cell-on-lipo?commentId=705844%3AComment%3A871856

Small vices:

* http://www.conrad.ch/ce/de/product/815880/Schraubstock-Basetech-Backenbreite-73-mm-Spann-Weite-max-55-mm?ref=list
* https://www.bauundhobby.ch/maschinen-+-werkstatt/handwerkzeug/metallbearbeitung/schraubst%C3%B6cke/mini-schraubstock/C04010404/P4939581/de
* https://www.bauundhobby.ch/maschinen-+-werkstatt/handwerkzeug/metallbearbeitung/schraubst%C3%B6cke/hobby-schraubstock-60x55-mm/C04010404/P3191093/de

Distinguishing CW and CCW propellers: http://ardupilot.org/copter/docs/connect-escs-and-motors.html#recognizing-clockwise-and-counterclockwise-propellers

Getting rid of polyurethane foam odor: http://www.doityourself.com/stry/how-to-get-rid-of-polyurethane-foam-odor

Rosin paste flux:

* https://www.amazon.com/Rosin-Paste-Flux-135-Jar/dp/B008ZIV85A
* https://www.pcb-soldering.co.uk/sra-rosin-flux-paste-no-135.html

---

I asked if there was any other difference between the X8R and the XSR other than the physical pin arrangement but didn't get any answers: <https://www.rcgroups.com/forums/showthread.php?2926651-Differences-between-X8R-and-XSR-%28other-than-physical-pins%29>


---

Misc links:

* 1S Paraboard for charging 1S batteries - https://hobbyking.com/en_us/micro-paraboard-micro-jst-jst-ph-connectors.html
* Good introduction to setting up a SkyRC charger (a dual charger similar to the S60). In German but better than any of the useless English ones - https://www.youtube.com/watch?v=1w9ROBMUEgk

* [ArduPilot Mission Planner documentation](http://ardupilot.org/planner/docs/common-install-mission-planner.html)
* [Mission Planner downloads](http://firmware.eu.ardupilot.org/Tools/MissionPlanner/)

* [QGroundControl](https://docs.qgroundcontrol.com/en/).

* [DroneCode](https://www.dronecode.org/dronecode-software-platform) - a body involved in coordinating between lots of teams, including the PX4 team, and used to also include ArduPilot until they [parted ways](http://discuss.ardupilot.org/t/ardupilot-and-dronecode/11295) (for reasons that sound understandable, at least the way ArduPilot tell it).

* [Setup VirtualBox to grab USB device before something on host does](https://forums.virtualbox.org/viewtopic.php?f=8&t=54008)

* [Meaning of Pixhawk tones](https://3dr.com/support/articles/listen_to_notification_tones/) - not terribly "consumable".

* DroneTrest nice complete build walkthru [part 1](http://blog.dronetrest.com/emax-nighthawk-x-series-x5-build-guide/) and [part 2](https://www.dronetrest.com/t/emax-nighthawk-x-series-x5-build-guide-part-2-configuration-of-sp-f3-evo-flight-controller/2994). Even though it's for a completely different quadcopter type with different flight controller and software it's a nice overview of pretty much everything that one needs to consider in the course of a build.

* Ideally your flight controller and GPS should be oriented properly in the plane but you can [correct for actual orientation](http://discuss.px4.io/t/px4-qgc-internal-external-magnetometer-calibration-and-orientation/1219) in the flight software.

* ArduPilot's [vibration damping](http://ardupilot.org/copter/docs/common-vibration-damping.html) page, in particular Gut McCaldin's much referenced solution and a link to the vibration obsessed Forrest Frantz's pages. Note: if you go there you'll various people who pop up elsewhere all chatting, so it seems well respected, and the Guy McCaldin setup comes up there as a good buyable option (all Frantz's solutions involve DIYing).
* Thingverse [plans](http://www.thingiverse.com/thing:163472) for McCaldin's model and his [Shapeway page](https://www.shapeways.com/product/348KGX5PM/omnimac-pixhawk-mount-v1-1?optionId=42539551) for it (with a small markup), plus the relevant [rubber plugs and screws](https://hobbyking.com/en_us/general-purpose-anti-vibration-rubber-w-m3-x-11mm-screw-and-m3-nylock-nut-4pcs-set.html?___store=en_us) from HobbyKing.

* [ArduPilot - why mounting the GPS on a mast is a good idea](http://ardupilot.org/copter/docs/common-magnetic-interference.html#common-magnetic-interference).

* [Restricted fly zones in Switzerland](https://map.geo.admin.ch/?layers=ch.bazl.einschraenkungen-drohnen&topic=aviation&lang=en&bgLayer=ch.swisstopo.pixelkarte-grau&layers_opacity=0.6&catalogNodes=1379&X=248250.00&Y=673960.00&zoom=3) (click on the purple and blue areas to see what they mean - purple is an absolute prohibition near airffields and purple is a restriction to flying below 150m, both are relevant only to drones above 0.5Kg).

* [LiPo safety bag with reference to relevant in-cabin airline regulation](https://www.brack.ch/hyperion-lipo-protective-bag-408878) (suitable for at least 2 batteries of the size I use).

* [Debugging the Pixhawk via GDB](http://ardupilot.org/dev/docs/debugging-with-gdb.html)

* Inside a Pixhawk - from [above](http://fpvlab.com/forums/attachment.php?attachmentid=40348&d=1391147798) and [below](http://fpvlab.com/forums/attachment.php?attachmentid=40349&d=1391147820).

---

Completely left field links:

* [mbed pin header files for Nucleo F429ZI](https://developer.mbed.org/users/mbed_official/code/mbed-dev/file/e13f6fdb2ac4/targets/TARGET_STM/TARGET_STM32F4/TARGET_STM32F429xI/TARGET_NUCLEO_F429ZI).

* Hackaday's series on using [CAD packages](http://hackaday.com/2014/02/05/3d-printering-making-a-thing-in-freecad-part-i/) - FreeCAD (and possible OpenSCAD) are the most relevant to me. Videos on [using FreeCAD](https://www.youtube.com/watch?v=Ls5MI3gSSlk) and [using OpenSCAD](https://www.youtube.com/watch?v=_Pp8w8W5Sg8).

* [Gitbook image captions plugin](https://www.npmjs.com/package/gitbook-plugin-image-captions).
* [The most popular Javascript lightbox](http://lokeshdhakar.com/projects/lightbox2/).

---

Generally good sites
--------------------

Oscar Liang's [site](https://oscarliang.com/) (even though it focuses on [FPV racing](https://fpvracing.tv/guides/beginners)), good jumping off pages are:

* [Drone racing for beginners](https://oscarliang.com/mini-quad-racing-guide/), skip down past the initial FPV racing stuff to the "Should I Build My First Drone?" and beyond. There are links to his highly informative articles from [transmitters](https://oscarliang.com/choose-rc-transmitter-quadcopter/) to [batteries](https://oscarliang.com/lipo-battery-guide/) - note his howtos aren't about specific makes and models but all about the common features and technologies behind the things he's discussing.
* [Overview of the hardware components of a quadcopter](https://oscarliang.com/build-a-quadcopter-beginners-tutorial-1/).

---

Batteries:

* [Battery anatomy and plugging in your battery alarm](http://learn.trossenrobotics.com/index.php/getting-started-with-the-arbotix/11-lipo-battery-guide).
* [Batteries in-depth, including the 80% rule](http://www.rchelicopterfun.com/rc-lipo-batteries.html).

---

Unsorted URLs already used in the other pages:

* http://ardupilot.org/copter/docs/build-your-own-multicopter.html
* http://ardupilot.org/dev/docs/apmcopter-code-overview.html
* http://px4.io/docs/px4-basic-concepts/
* https://github.com/ArduPilot/ardupilot
* https://github.com/PX4/Firmware/
* http://ardupilot.org/copter/docs/common-choosing-a-ground-station.html
* http://blog.dronetrest.com/taranis-x9d-or-taranis-q-x7-which-is-better-to-buy/
* https://pixhawk.org/peripherals/telemetry/frsky
* https://pixhawk.org/peripherals/radio-control/frsky
* https://pixhawk.org/peripherals/radio-control/frsky#receivers
* https://pixhawk.org/peripherals/radio-control/frsky#parts_list - D4R-II warning
* http://www.dronetrest.com/t/everything-you-need-to-know-about-lipo-battery-chargers/1326
* https://oscarliang.com/taranis-q-x7-tx/
* http://open-txu.org/home/undergraduate-courses/fund-of-opentx/using-zadig/
* http://www.open-tx.org/
* https://oscarliang.com/flash-opentx-firmware-taranis/
* https://www.youtube.com/watch?v=q1D-LEfDprk&feature=youtu.be&t=179
* http://www.frsky-rc.com/download/
* http://www.frsky-rc.com/media/mediaItem.php?m_id=17
* http://ardupilot.org/copter/docs/flight-modes.html
* https://opentx.gitbooks.io/manual-for-opentx-2-2/content/
* http://openrcforums.com/forum/viewtopic.php?f=45&t=8724
* http://open-txu.org/home/undergraduate-courses/
* http://ardupilot.org/copter/docs/common-mounting-the-flight-controller.html#standard-orientation
* http://www.dji.com/flame-wheel-arf/feature
* http://store.dji.com/product/e305-4
* http://www.dji.com/products/tuned-propulsion-system
* https://www.rcgroups.com/forums/showthread.php?2456770-Review-DJI-E305-Tuned-Propulsion-System
* http://store.dji.com/product/2312e-motor-800kv-cw
* http://www.rcuniverse.com/forum/rc-car-general-discussions-179/11586761-everything-you-need-know-about-lipo-batteries.html
* http://thedronegirl.com/2015/02/07/lipo-battery/
* http://www.tjinguytech.com/charging-how-tos/balance-connectors
* https://pixhawk.org/modules/stm32f4discovery
* https://bitbucket.org/nuttx/boards/src/master/stm32f429i-disco/
* http://www.nuttx.org/Documentation/NuttX.html#stm32f429x
* http://www.mjoldfield.com/atelier/2015/04/stm32-development.html
* https://github.com/PX4-NuttX
* https://github.com/PX4/homebrew-px4
* http://www.proficnc.com/content/13-pixhawk2
* https://pixhawk.ethz.ch/software/imu/sd_card
* https://oscarliang.com/choose-rc-transmitter-quadcopter/#modes
* http://newatlas.com/drone-school-quadcopter-transmitter-mode-1-2/40847/
* https://www.wearechampionmag.com/quadcopter-transmitter-mode2-vs-mode1-difference
* https://dronebuff.com/drone-controller/
* https://www.youtube.com/watch?v=Nk2h06Ql3cM
* https://www.youtube.com/watch?v=7cExS1tTOJA&feature=youtu.be&t=498
* https://www.youtube.com/watch?v=YD3ojhwVmrI&feature=youtu.be&t=291
* https://www.youtube.com/watch?v=yF8jrkYJ7nA&feature=youtu.be&t=22
* http://rcdiy.ca/taranis-q-x7-tutorial-first-flight-setup/
