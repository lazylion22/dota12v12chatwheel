import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";

export default function ComboBox() {
  const [inputValue, setInputValue] = React.useState("");
  const buttonRef = useRef(null);
  const buttonRef2 = useRef(null);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          alignItems: "center"
        }}
      >
        <Autocomplete
          value={inputValue}
          disablePortal
          autoHighlight
          clearOnEscape
          onChange={(event, newValue) => {
            if (newValue) {
              buttonRef.current.innerHTML = newValue.txt;
            }
          }}
          onSelect={(event, newValue) => {
            setInputValue("");
          }}
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 400 }}
          renderInput={(params) => <TextField {...params} label="Line" />}
        />
        <br />
        <div style={{ padding: 30 }} align="left" ref={buttonRef}></div>
        <Autocomplete
          value={inputValue}
          disablePortal
          autoHighlight
          clearOnEscape
          onChange={(event, newValue) => {
            if (newValue) {
              buttonRef2.current.innerHTML = newValue.txt;
            }
          }}
          onSelect={(event, newValue) => {
            setInputValue("");
          }}
          id="combo-box-demo"
          options={top100Films2}
          sx={{ width: 400 }}
          renderInput={(params) => <TextField {...params} label="Hero" />}
        />
        <br />
        <div style={{ padding: 30 }} align="left" ref={buttonRef2}></div>
      </Box>
    </>
  );
}

const top100Films2 = [
  {
    label: "Abaddon",
    txt: `
  [' abaddon_laugh', 'Ha ha ha ha ha ha ha ha ha.'] -ch 110 <br />
  [' abaddon_thank', 'The House Avernus will disown me for that.'] -ch 111 <br />
  [' abaddon_deny', 'Never.'] -ch 112 <br />
  [' abaddon_1', 'Bow to your lord.'] -ch 113 <br />
  [' abaddon_2', 'How can such a thing be?'] -ch 114 <br />
  [' abaddon_3', 'In the mists of time you are but a blur.'] -ch 115 <br />
  [' abaddon_4', 'By what right do you tread here?'] -ch 116 <br />
  [' abaddon_5', 'The fog of war is no match for the mist of fate.'] -ch 117 <br />
  `
  },
  {
    label: "Alchemist",
    txt: `
  [' alchemist_laugh', 'Ha ha ha ha ha!'] -ch 118 <br />
  [' alchemist_thank', "We've got pretty good chemistry."] -ch 119 <br />
  [' alchemist_deny', 'That was genius!'] -ch 120 <br />
  [' alchemist_1', 'Hey, everybody!'] -ch 121 <br />
  [' alchemist_2', 'Talk about overreacting.'] -ch 122 <br />
  [' alchemist_3', "I can't believe I'm seeing this with my own eyes!"] -ch 123 <br />
  [' alchemist_4', 'What a mess!'] -ch 124 <br />
  [' alchemist_5', 'Failure is just another kind of success. The wrong kind.'] -ch 125 <br />
  `
  },
  {
    label: "Ancient",
    txt: `
  [' ancient_apparition_laugh', 'Hm hm hm ha ha ha ha ha ha ha!'] -ch 126 <br />
  [' ancient_apparition_thank', 'Interesting.'] -ch 127 <br />
  [' ancient_apparition_deny', 'A cold wind blows.'] -ch 128 <br />
  [' ancient_apparition_1', 'Your blood runs cold.'] -ch 129 <br />
  [' ancient_apparition_2', "I'm too old for this!"] -ch 130 <br />
  [' ancient_apparition_3', 'I waited ages but it was worth it.'] -ch 131 <br />
  [' ancient_apparition_4', 'Time to break the ice!'] -ch 132 <br />
  [' ancient_apparition_5', 'Icefog!'] -ch 133 <br />
  `
  },
  {
    label: "Antimage",
    txt: `
  ['antimage_laugh', 'Ha ha ha ha ha ha ha ha ha ha ha ha!'] -ch 134 <br />
  [' antimage_thank', "I'll give them a drubbing they'll not soon forget!"] -ch 135 <br />
  [' antimage_deny', 'Are you even trying?'] -ch 136 <br />
  [' antimage_1', 'Magic is an abomination.'] -ch 137 <br />
  [' antimage_2', 'A disappointment.'] -ch 138 <br />
  [' antimage_3', 'Magic thyself out of that.'] -ch 139 <br />
  [' antimage_4', 'Thou art damned!'] -ch 140 <br />
  [' antimage_5', "Send thy Dead God's legions, I will put them all to death."] -ch 141 <br />
  `
  },
  {
    label: "Arc Warden",
    txt: `
  [' arc_warden_laugh', 'Hm hm hm hm hm hm hm hm hm hm hm hm hm hm hm.'] -ch 142 <br />
  [' arc_warden_thank', 'Your grace is noted.'] -ch 143 <br />
  [' arc_warden_deny', 'Do not be selfish.'] -ch 144 <br />
  [' arc_warden_1', 'Busted.'] -ch 145 <br />
  [' arc_warden_2', 'What have you done?'] -ch 146 <br />
  [' arc_warden_3', 'A mere diversion.'] -ch 147 <br />
  [' arc_warden_4', 'Frowny face.'] -ch 148 <br />
  [' arc_warden_5', 'You do not have to be mad.'] -ch 149 <br />
  `
  },
  {
    label: "Axe",
    txt: `
  [' axe_laugh', 'Ha ha ha ha ha ha!'] -ch 150 <br />
  [' axe_thank', 'Axe likes this very much.'] -ch 151 <br />
  [' axe_deny', 'You deserve nothing!'] -ch 152 <br />
  [' axe_1', 'You fought badly--died worse.'] -ch 153 <br />
  [' axe_2', 'I said good day, sir!'] -ch 154 <br />
  [' axe_3', 'Axe misjudged?'] -ch 155 <br />
  [' axe_4', 'Axe has no time for all this jibber-jabber.'] -ch 156 <br />
  [' axe_5', 'What happened? Axe happened!'] -ch 157 <br />
  `
  },
  {
    label: "Bane",
    txt: `
  [' bane_laugh', 'Ha ha ha ha ha ha ha ha ha!'] -ch 158 <br />
  [' bane_thank', "You're so nice."] -ch 159 <br />
  [' bane_deny', 'Better luck next time.'] -ch 160 <br />
  [' bane_1', 'Bane of your existence.'] -ch 161 <br />
  [' bane_2', "I've been dreaming of this moment."] -ch 162 <br />
  [' bane_3', 'Fair exchange.'] -ch 163 <br />
  [' bane_4', 'Now your nightmare lasts forever.'] -ch 164 <br />
  [' bane_5', 'Ah ya ya ya ya ya yai eeyas!'] -ch 165 <br />
  `
  },
  {
    label: "Batrider",
    txt: `
  [' batrider_laugh', 'He ha ha!'] -ch 166 <br />
  [' batrider_thank', "Ah, that's what I'm talking about!"] -ch 167 <br />
  [' batrider_deny', 'This is gonna sting.'] -ch 168 <br />
  [' batrider_1', 'Aw yeah, off we ride into the sunset.'] -ch 169 <br />
  [' batrider_2', 'Life just got interesting!'] -ch 170 <br />
  [' batrider_3', "I'm sappin your will to live!"] -ch 171 <br />
  [' batrider_4', 'Whoa, sick burn!'] -ch 172 <br />
  [' batrider_5', 'That was lame.'] -ch 173 <br />
  `
  },
  {
    label: "Beastmaster",
    txt: `
  [' beastmaster_laugh', 'Howeh heh heh eh hah heh heh heh.'] -ch 174 <br />
  [' beastmaster_thank', "Sic 'em!"] -ch 175 <br />
  [' beastmaster_deny', "I'll be creeping while you are sleeping."] -ch 176 <br />
  [' beastmaster_1', 'The worms will have you.'] -ch 177 <br />
  [' beastmaster_2', 'A strict no-kill policy.'] -ch 178 <br />
  [' beastmaster_3', 'Aroo arooew!'] -ch 179 <br />
  [' beastmaster_4', "Hmm, wish I'd learned how to read."] -ch 180 <br />
  [' beastmaster_5', 'Hoo hoo hoo.'] -ch 181 <br />
  `
  },
  {
    label: "Bloodseeker",
    txt: `
  [' bloodseeker_laugh', 'Hmm-heh-heh-heh-heh-ha!'] -ch 182 <br />
  [' bloodseeker_thank', 'So much blood.'] -ch 183 <br />
  [' bloodseeker_deny', 'No blood for you.'] -ch 184 <br />
  [' bloodseeker_1', "I'm seeing red...and it's amazing!"] -ch 185 <br />
  [' bloodseeker_2', "Don't be negative...be positive."] -ch 186 <br />
  [' bloodseeker_3', 'Go ahead...run.'] -ch 187 <br />
  [' bloodseeker_4', 'Lie down...have a cookie.'] -ch 188 <br />
  [' bloodseeker_5', 'Over the field of battle, the smell of blood rises like a promise.'] -ch 189 <br />
  `
  },
  {
    label: "Bounty Hunter",
    txt: `
  [' bounty_hunter_laugh', 'Ah ha ha ha ha ha ha ha ha.'] -ch 190 <br />
  [' bounty_hunter_thank', 'My allies have earned their keep.'] -ch 191 <br />
  [' bounty_hunter_deny', 'How many of you do I have to kill?'] -ch 192 <br />
  [' bounty_hunter_1', 'Just business, nothing personal.'] -ch 193 <br />
  [' bounty_hunter_2', 'A wise hunter knows patience.'] -ch 194 <br />
  [' bounty_hunter_3', "Stings, don't it?"] -ch 195 <br />
  [' bounty_hunter_4', "You can run but you can't hide."] -ch 196 <br />
  [' bounty_hunter_5', "They'll tell tales of this."] -ch 197 <br />
  `
  },
  {
    label: "Brewmaster",
    txt: `
  [' brewmaster_laugh', 'Hehaahehah.'] -ch 198 <br />
  [' brewmaster_thank', 'Ah, I love you guys.'] -ch 199 <br />
  [' brewmaster_deny', 'Better luck next time.'] -ch 200 <br />
  [' brewmaster_1', "Now I'm feeling it."] -ch 201 <br />
  [' brewmaster_2', 'Oh, so bubbly!'] -ch 202 <br />
  [' brewmaster_3', "What's wrong? Can't hold your liquor?"] -ch 203 <br />
  [' brewmaster_4', "It's happy hour!"] -ch 204 <br />
  [' brewmaster_5', 'What kind of pub is this?'] -ch 205 <br />
  `
  },
  {
    label: "Bristleback",
    txt: `
  [' bristleback_laugh', 'Hehey hahaha.'] -ch 206 <br />
  [' bristleback_thank', 'Bright and breezy.'] -ch 207 <br />
  [' bristleback_deny', 'Ah, now I feel better.'] -ch 208 <br />
  [' bristleback_1', "Oooh, that's lovely days."] -ch 209 <br />
  [' bristleback_2', 'No way.'] -ch 210 <br />
  [' bristleback_3', 'Oh, you want some of this… eh?'] -ch 211 <br />
  [' bristleback_4', "Who's squealing now, eh? Ha, aha ha heh."] -ch 212 <br />
  [' bristleback_5', 'Well, what have we here.'] -ch 213 <br />
  `
  },
  {
    label: "Broodmother",
    txt: `
  [' broodmother_laugh', 'Ha ha ha ha ha.'] -ch 214 <br />
  [' broodmother_thank', 'What a lovely brood.'] -ch 215 <br />
  [' broodmother_deny', 'I need this like I need another pair of legs.'] -ch 216 <br />
  [' broodmother_1', 'Delicious.'] -ch 217 <br />
  [' broodmother_2', "You're not afraid of spiders, are you?"] -ch 218 <br />
  [' broodmother_3', "Don't die, my darlings."] -ch 219 <br />
  [' broodmother_4', 'Oh so beautiful.'] -ch 220 <br />
  [' broodmother_5', 'Sss-sss-ssslurp!'] -ch 221 <br />
  `
  },
  {
    label: "Centaur",
    txt: `
  [' centaur_laugh', 'Heheeeh hahah ehha.'] -ch 222 <br />
  [' centaur_thank', 'I shall honor your name.'] -ch 223 <br />
  [' centaur_deny', 'Stomped.'] -ch 224 <br />
  [' centaur_1', 'Mmmmm.'] -ch 225 <br />
  [' centaur_2', 'What a waste.'] -ch 226 <br />
  [' centaur_3', 'Back to hell with you.'] -ch 227 <br />
  [' centaur_4', 'Oh, yes, fear my hoofbeats.'] -ch 228 <br />
  [' centaur_5', 'Hurts you more than it hurts me.'] -ch 229 <br />
  `
  },
  {
    label: "Chaos knight",
    txt: `
  [' chaos_knight_laugh', 'Oo ho ho ha ha ha ha ha ha ha ha ha ha ha!'] -ch 230 <br />
  [' chaos_knight_thank', 'Yes. Yes!'] -ch 231 <br />
  [' chaos_knight_deny', 'I consign you to dust.'] -ch 232 <br />
  [' chaos_knight_1', 'You were no match.'] -ch 233 <br />
  [' chaos_knight_2', 'Your reputation precedes you.'] -ch 234 <br />
  [' chaos_knight_3', 'Where ride the horsemen death shall follow.'] -ch 235 <br />
  [' chaos_knight_4', 'Long have I waited.'] -ch 236 <br />
  [' chaos_knight_5', 'We descend into chaos.'] -ch 237 <br />
  `
  },
  {
    label: "Chen",
    txt: `
  [' chen_laugh', 'Hehehmehmehmmm.'] -ch 238 <br />
  [' chen_thank', 'Oh, thank God.'] -ch 239 <br />
  [' chen_deny', "Can't escape your sins."] -ch 240 <br />
  [' chen_1', 'Found unworthy.'] -ch 241 <br />
  [' chen_2', 'What blasphemy is this?'] -ch 242 <br />
  [' chen_3', 'The time draws nigh.'] -ch 243 <br />
  [' chen_4', 'The persecution starts now!'] -ch 244 <br />
  [' chen_5', 'A fulfillment of the prophecy.'] -ch 245 <br />
  `
  },
  {
    label: "Clinkz",
    txt: `
  [' clinkz_laugh', 'Ah ha ha ha ha.'] -ch 246 <br />
  [' clinkz_thank', 'Well done.'] -ch 247 <br />
  [' clinkz_deny', 'You almost had it too.'] -ch 248 <br />
  [' clinkz_1', "I'll burn your body to ashes."] -ch 249 <br />
  [' clinkz_2', 'Fight fire with fire.'] -ch 250 <br />
  [' clinkz_3', 'Thanks for the target practice.'] -ch 251 <br />
  [' clinkz_4', 'Yes!'] -ch 252 <br />
  [' clinkz_5', "Fire grows hungrier the more it's fed."] -ch 253 <br />
  `
  },
  {
    label: "Crystal maiden",
    txt: `
  [' crystal_maiden_laugh', 'Ah ha ha ha ha ha.'] -ch 262 <br />
  [' crystal_maiden_thank', 'Very cool of you!'] -ch 263 <br />
  [' crystal_maiden_deny', 'Now nobody wins!'] -ch 264 <br />
  [' crystal_maiden_1', "You'll make a nice snow angel."] -ch 265 <br />
  [' crystal_maiden_2', "I've got goosebumps!"] -ch 266 <br />
  [' crystal_maiden_3', "I didn't see that coming."] -ch 267 <br />
  [' crystal_maiden_4', 'It just keeps getting better.'] -ch 268 <br />
  [' crystal_maiden_5', 'Is it cold in here or is it just me?'] -ch 269 <br />
  `
  },
  {
    label: "Dark_seer",
    txt: `
  [' dark_seer_laugh', 'Heheh yeheheh hey heehhhe yehhey yehe heheh eheh yeh.'] -ch 270 <br />
  [' dark_seer_thank', 'Very good.'] -ch 271 <br />
  [' dark_seer_deny', "Hh, didn't see that coming, did you?"] -ch 272 <br />
  [' dark_seer_1', 'Your life, much like your head, lacked a point.'] -ch 273 <br />
  [' dark_seer_2', 'I cannot believe that worked.'] -ch 274 <br />
  [' dark_seer_3', 'Hoooahahaaaheeh.'] -ch 275 <br />
  [' dark_seer_4', "You've hit a wall."] -ch 276 <br />
  [' dark_seer_5', 'We are not so different, my enemies and I. Except my brain is much larger.'] -ch 277 <br />
  `
  },
  {
    label: "Dark_willow",
    txt: `
  [' dark_willow_laugh', 'Hahaha ahaha ahaha ahhahahahahaa!'] -ch 278 <br />
  [' dark_willow_thank', 'Just what I was waiting for.'] -ch 279 <br />
  [' dark_willow_deny', "I won't lie, that was unexpected..."] -ch 280 <br />
  [' dark_willow_1', 'No. Just... no.'] -ch 281 <br />
  [' dark_willow_2', 'Never had a chance...'] -ch 282 <br />
  [' dark_willow_3', "Oh-ho. Don't mind me. Just a wee fairy going about her business."] -ch 283 <br />
  [' dark_willow_4', "I don't know what I was expecting."] -ch 284 <br />
  [' dark_willow_5', 'This makes absolutely no sense.'] -ch 285 <br />
  `
  },
  {
    label: "Dawnbreaker",
    txt: `
  [' dawnbreaker_laugh', 'Ha ha ha ha ha ha ha ha ha ha ha ha!'] -ch 294 <br />
  [' dawnbreaker_thank', 'Thank you, you precious weak thing.'] -ch 295 <br />
  [' dawnbreaker_deny', "That's a strange manner of conduct."] -ch 296 <br />
  [' dawnbreaker_1', ' The lesson for you is never try.'] -ch 297 <br />
  [' dawnbreaker_2', ' Can you not make yourself better?'] -ch 298 <br />
  [' dawnbreaker_3', ' Even at a fraction of my best, I outshine you immeasurably.'] -ch 299 <br />
  [' dawnbreaker_4', ' There are rules about that kind of thing where I come from.'] -ch 300 <br />
  [' dawnbreaker_5', " For how short your lives are, you've done quite well."] -ch 301 <br />
  `
  },
  {
    label: "Dazzle",
    txt: `
  [' dazzle_laugh', 'Ha ha har ha ha ha!'] -ch 286 <br />
  [' dazzle_thank', 'Oh, what a beauty!'] -ch 287 <br />
  [' dazzle_deny', "That's not right."] -ch 288 <br />
  [' dazzle_1', 'A dazzling death.'] -ch 289 <br />
  [' dazzle_2', 'Charitable of you.'] -ch 290 <br />
  [' dazzle_3', 'Jzap!'] -ch 291 <br />
  [' dazzle_4', 'Tricked you.'] -ch 292 <br />
  [' dazzle_5', 'That was almost a disaster.'] -ch 293 <br />
  `
  },
  {
    label: "Death prophet",
    txt: `
  [' death_prophet_laugh', 'Oh ah ha ha ha ha ha ho ho haa! Ha ha ha ha ha ha!'] -ch 302 <br />
  [' death_prophet_thank', 'Well done, my beauties!'] -ch 303 <br />
  [' death_prophet_deny', 'Not meant to be.'] -ch 304 <br />
  [' death_prophet_1', 'Poor dear.'] -ch 305 <br />
  [' death_prophet_2', 'How disappointing.'] -ch 306 <br />
  [' death_prophet_3', 'Come back to me! Come back to me!'] -ch 307 <br />
  [' death_prophet_4', 'It did not take a prophet to see that coming.'] -ch 308 <br />
  [' death_prophet_5', 'I died a little just now.'] -ch 309 <br />
  `
  },
  {
    label: "Disruptor",
    txt: `
  [' disruptor_laugh', 'Heheha.'] -ch 310 <br />
  [' disruptor_thank', "Now that's more like it."] -ch 311 <br />
  [' disruptor_deny', "I'm ecstatic!"] -ch 312 <br />
  [' disruptor_1', 'What weathermancery is this?'] -ch 313 <br />
  [' disruptor_2', "You've been disrupted."] -ch 314 <br />
  [' disruptor_3', "They're trying to kill me."] -ch 315 <br />
  [' disruptor_4', 'I call down the thunder.'] -ch 316 <br />
  [' disruptor_5', 'Well, look at that.'] -ch 317 <br />
  `
  },
  {
    label: "Doom",
    txt: `
  [' doom_bringer_laugh', 'Heheh heh hah heh hah hah hah.'] -ch 318 <br />
  [' doom_bringer_thank', 'Oh, yes.'] -ch 319 <br />
  [' doom_bringer_deny', 'I gambled, you lost.'] -ch 320 <br />
  [' doom_bringer_1', "He he heh heh he, handsome devil, aren't I?"] -ch 321 <br />
  [' doom_bringer_2', "Well, hell's bells."] -ch 322 <br />
  [' doom_bringer_3', 'Oh, crap.'] -ch 323 <br />
  [' doom_bringer_4', 'Hemmehm, you were lucky this time.'] -ch 324 <br />
  [' doom_bringer_5', "All hell's broken loose."] -ch 325 <br />
  `
  },
  {
    label: "Dragon",
    txt: `
  [' dragon_knight_laugh', 'Tehh, heh he huh heh heh huh.'] -ch 326 <br />
  [' dragon_knight_thank', 'In strength is victory.'] -ch 327 <br />
  [' dragon_knight_deny', "Just what I've been waiting for."] -ch 328 <br />
  [' dragon_knight_1', 'You fought and died with honor.'] -ch 329 <br />
  [' dragon_knight_2', "I'll take that."] -ch 330 <br />
  [' dragon_knight_3', 'Live by the sword, die by the dragon.'] -ch 331 <br />
  [' dragon_knight_4', 'Of course.'] -ch 332 <br />
  [' dragon_knight_5', 'Face the knight, face the dragon.'] -ch 333 <br />
  `
  },
  {
    label: "Drow ranger",
    txt: `
  [' drow_ranger_laugh', 'Ah ha ha ha ha ha ha ha ha ha ha ha ha ha!'] -ch 334 <br />
  [' drow_ranger_thank', 'Another triumph!'] -ch 335 <br />
  [' drow_ranger_deny', "You'll have to do better than that!"] -ch 336 <br />
  [' drow_ranger_1', 'You were too noisy to live.'] -ch 337 <br />
  [' drow_ranger_2', 'Amateur.'] -ch 338 <br />
  [' drow_ranger_3', 'You die alone.'] -ch 339 <br />
  [' drow_ranger_4', "This couldn't have ended any other way."] -ch 340 <br />
  [' drow_ranger_5', "Now that you're dead, I find it easy to respect you."] -ch 341 <br />
  `
  },
  {
    label: "Earth spirit",
    txt: `
  [' earth_spirit_laugh', 'Oh ho ho ha ha ha ha ha ha!'] -ch 342 <br />
  [' earth_spirit_thank', 'You rock.'] -ch 343 <br />
  [' earth_spirit_deny', 'Yes, I just did that.'] -ch 344 <br />
  [' earth_spirit_1', 'What?'] -ch 345 <br />
  [' earth_spirit_2', 'Where did I go?'] -ch 346 <br />
  [' earth_spirit_3', 'Perfect timing.'] -ch 347 <br />
  [' earth_spirit_4', 'Really? Really?'] -ch 348 <br />
  [' earth_spirit_5', 'Who dares face me now.'] -ch 349 <br />
  `
  },
  {
    label: "Earthshaker",
    txt: `
  [' earthshaker_laugh', 'Ha ha ha ha ha ha ha ha ha.'] -ch 350 <br />
  [' earthshaker_thank', "Let's shake things up!"] -ch 351 <br />
  [' earthshaker_deny', 'Shocking...'] -ch 352 <br />
  [' earthshaker_1', 'It was your own damn fault.'] -ch 353 <br />
  [' earthshaker_2', 'Whoa... Aftershocks...'] -ch 354 <br />
  [' earthshaker_3', "Slammin'...?"] -ch 355 <br />
  [' earthshaker_4', 'It was getting far too crowded.'] -ch 356 <br />
  [' earthshaker_5', "There may be many earths, but there's only one Earthshaker."] -ch 357 <br />
  `
  },
  {
    label: "Elder titan",
    txt: `
  [' elder_titan_laugh', 'Eh ha ha ha ha ha.'] -ch 358 <br />
  [' elder_titan_thank', 'Now shall the battle turn.'] -ch 359 <br />
  [' elder_titan_deny', 'The Titan says no.'] -ch 360 <br />
  [' elder_titan_1', 'Get off my lawn!'] -ch 361 <br />
  [' elder_titan_2', 'What have I done now?'] -ch 362 <br />
  [' elder_titan_3', 'This bodes well.'] -ch 363 <br />
  [' elder_titan_4', 'A pitiable attempt.'] -ch 364 <br />
  [' elder_titan_5', 'You must learn respect for your elders.'] -ch 365 <br />
  `
  },
  {
    label: "Ember spirit",
    txt: `
  [' ember_spirit_laugh', 'Eh he he he he he!'] -ch 366 <br />
  [' ember_spirit_thank', 'A flash of inspiration!'] -ch 367 <br />
  [' ember_spirit_deny', 'This reward transcends expectation!'] -ch 368 <br />
  [' ember_spirit_1', 'Prepare for a lesson.'] -ch 369 <br />
  [' ember_spirit_2', 'What did you learn?'] -ch 370 <br />
  [' ember_spirit_3', 'Balance in all things.'] -ch 371 <br />
  [' ember_spirit_4', 'Through anger lies failure.'] -ch 372 <br />
  [' ember_spirit_5', 'Even a master falters.'] -ch 373 <br />
  `
  },
  {
    label: "Enchantress",
    txt: `
  [' enchantress_laugh', 'Ha ha ha ha ha ha ha!'] -ch 374 <br />
  [' enchantress_thank', 'I love winning!'] -ch 375 <br />
  [' enchantress_deny', "Don't be mad."] -ch 376 <br />
  [' enchantress_1', "It's just not fair."] -ch 377 <br />
  [' enchantress_2', 'Hilarious.'] -ch 378 <br />
  [' enchantress_3', 'You did your best.'] -ch 379 <br />
  [' enchantress_4', 'Sproink.'] -ch 380 <br />
  [' enchantress_5', 'You know what I love? Everything!'] -ch 381 <br />
  `
  },
  {
    label: "Enigma",
    txt: `
  [' enigma_laugh', 'He-he-huh-heh-heh.'] -ch 382 <br />
  [' enigma_thank', 'Well, this is a paradox.'] -ch 383 <br />
  [' enigma_deny', 'An astronomical price.'] -ch 384 <br />
  [' enigma_1', 'Stare into the abyss.'] -ch 385 <br />
  [' enigma_2', 'Silence is golden.'] -ch 386 <br />
  [' enigma_3', 'You are beneath me.'] -ch 387 <br />
  [' enigma_4', 'A welcome manifestation of randomness.'] -ch 388 <br />
  [' enigma_5', 'If light cannot escape me, what hope have you?'] -ch 389 <br />
  `
  },
  {
    label: "Faceless Void",
    txt: `
  [' faceless_void_laugh', 'Heh heh hah ha hah heh heah heh.'] -ch 390 <br />
  [' faceless_void_thank', 'Just as I envisaged!'] -ch 391 <br />
  [' faceless_void_deny', 'Some things were just not meant to be.'] -ch 392 <br />
  [' faceless_void_1', 'You lose face and life.'] -ch 393 <br />
  [' faceless_void_2', "You've been voided."] -ch 394 <br />
  [' faceless_void_3', "I can't bear to look."] -ch 395 <br />
  [' faceless_void_4', "I may be faceless, but I'm not maceless."] -ch 396 <br />
  [' faceless_void_5', 'An eternity of embarrassment!'] -ch 397 <br />
  `
  },
  {
    label: "Furion, Nature's Prophet ",
    txt: `
  [' furion_laugh', 'Ma ha ha ha ha ha ha ha ha ha!'] -ch 622 <br />
  [' furion_thank', 'Admirable.'] -ch 623 <br />
  [' furion_deny', 'Hmhmhm. Well, well.'] -ch 624 <br />
  [' furion_1', 'Feed the trees.'] -ch 625 <br />
  [' furion_2', "I'll tear you limb from limb."] -ch 626 <br />
  [' furion_3', 'Very nice.'] -ch 627 <br />
  [' furion_4', 'Aww, too bad.'] -ch 628 <br />
  [' furion_5', 'New life will make its home amongst your bones.'] -ch 629 <br />
  `
  },
  {
    label: "Grimstroke",
    txt: `
  [' grimstroke_laugh', 'Huh huh ha ha ha ha ha ha ha haaa!'] -ch 398 <br />
  [' grimstroke_thank', 'Oh, that is too good!'] -ch 399 <br />
  [' grimstroke_deny', 'You die, yet your failure lives on...'] -ch 400 <br />
  [' grimstroke_1', 'You should have known better...'] -ch 401 <br />
  [' grimstroke_2', 'These wretched fools have no idea...'] -ch 402 <br />
  [' grimstroke_3', 'Know your place.'] -ch 403 <br />
  [' grimstroke_4', "You've a mind like a child!"] -ch 404 <br />
  [' grimstroke_5', 'Watch the master at work.'] -ch 405 <br />
  `
  },
  {
    label: "Gyrocopter",
    txt: `
  [' gyrocopter_laugh', 'Ah ha! Wah haha ha ha! Ah ha hhuh.'] -ch 406 <br />
  [' gyrocopter_thank', 'Something for everybody!'] -ch 407 <br />
  [' gyrocopter_deny', 'Aaah phooey.'] -ch 408 <br />
  [' gyrocopter_1', 'Lucky!'] -ch 409 <br />
  [' gyrocopter_2', "I'm getting too old for this horse shit."] -ch 410 <br />
  [' gyrocopter_3', 'Get off my lawn!'] -ch 411 <br />
  [' gyrocopter_4', "That'll learn ya!"] -ch 412 <br />
  [' gyrocopter_5', 'I belong in the sky, and you belong in the ground.'] -ch 413 <br />
  `
  },
  {
    label: "Hoodwink",
    txt: `
  [' hoodwink_laugh', '', '', 'Ha eh eh he he!'] -ch 414 <br />
  [' hoodwink_thank', '', '', 'Proper skux.'] -ch 415 <br />
  [' hoodwink_deny', '', '', "Yeah, nah. Let's not."] -ch 416 <br />
  [' hoodwink_1', '', '', ' Caught ya!'] -ch 417 <br />
  [' hoodwink_2', '', '', ' Did you fall out of the nest as a baby?'] -ch 418 <br />
  [' hoodwink_3', '', '', ' Starting to feel a bit nutty.'] -ch 419 <br />
  [' hoodwink_4', '', '', ' Time to die!'] -ch 420 <br />
  [' hoodwink_5', '', '', ' Sleep tight, little guy.'] -ch 421 <br />
  `
  },
  {
    label: "Huskar",
    txt: `
  [' huskar_laugh', 'Heh heh heeh.'] -ch 422 <br />
  [' huskar_thank', 'Ahh, this will please the gods.'] -ch 423 <br />
  [' huskar_deny', 'Well worth it.'] -ch 424 <br />
  [' huskar_1', 'Another life squandered.'] -ch 425 <br />
  [' huskar_2', 'A fair trade!'] -ch 426 <br />
  [' huskar_3', 'My life now has meaning!'] -ch 427 <br />
  [' huskar_4', 'Is that all?'] -ch 428 <br />
  [' huskar_5', 'You gave all you could give but it was not enough.'] -ch 429 <br />
  `
  },
  {
    label: "Invoker",
    txt: `
  [' invoker_laugh', 'Ha ha ha ha ha ha ha ha ha ha!'] -ch 430 <br />
  [' invoker_thank', 'I will commit this to memory.'] -ch 431 <br />
  [' invoker_deny', 'One of my favorites.'] -ch 432 <br />
  [' invoker_1', 'Did I hear a squeak?'] -ch 433 <br />
  [' invoker_2', 'Fight me!'] -ch 434 <br />
  [' invoker_3', 'Did I mix my magics?'] -ch 435 <br />
  [' invoker_4', 'Profitable engagement.'] -ch 436 <br />
  [' invoker_5', 'Throughout the aeons I have been known by many names...but my true name of power...is Carl.'] -ch 437 <br />
  `
  },
  {
    label: "Jakiro",
    txt: `
  [' jakiro_laugh', 'Ha ha ha ha ha ha ha ha ha ha ha!'] -ch 446 <br />
  [' jakiro_thank', 'Cheers.'] -ch 447 <br />
  [' jakiro_deny', 'This changes everything.'] -ch 448 <br />
  [' jakiro_1', 'Burninated.'] -ch 449 <br />
  [' jakiro_2', "Now we're talking."] -ch 450 <br />
  [' jakiro_3', "We'll see about that."] -ch 451 <br />
  [' jakiro_4', 'We are not amused.'] -ch 452 <br />
  [' jakiro_5', 'That was cold blooded.'] -ch 453 <br />
  `
  },
  {
    label: "Juggernaut",
    txt: `
  [' juggernaut_laugh', 'Ha ha ha ha ha!'] -ch 454 <br />
  [' juggernaut_thank', "Oh that's nice."] -ch 455 <br />
  [' juggernaut_deny', 'Hm, looking good.'] -ch 456 <br />
  [' juggernaut_1', 'You will be forever alone.'] -ch 457 <br />
  [' juggernaut_2', "It's all falling into place."] -ch 458 <br />
  [' juggernaut_3', "I'll be back to finish this later."] -ch 459 <br />
  [' juggernaut_4', "There's a fine line between bravery and stupidity."] -ch 460 <br />
  [' juggernaut_5', 'Mm, snazzy.'] -ch 461 <br />
  `
  },
  {
    label: "Keeper",
    txt: `
  [' keeper_of_the_light_laugh', 'Eh hee hee hee hee hee.'] -ch 462 <br />
  [' keeper_of_the_light_thank', 'May the light keep you.'] -ch 463 <br />
  [' keeper_of_the_light_deny', 'No mana.'] -ch 464 <br />
  [' keeper_of_the_light_1', 'Really now, you should have seen that coming.'] -ch 465 <br />
  [' keeper_of_the_light_2', "Get off my lawn...eh, what's a lawn?"] -ch 466 <br />
  [' keeper_of_the_light_3', 'My horse says nay and so do I.'] -ch 467 <br />
  [' keeper_of_the_light_4', 'Lights out for you.'] -ch 468 <br />
  [' keeper_of_the_light_5', 'Do not fear the light - fear me!'] -ch 469 <br />
  `
  },
  {
    label: "Kunkka",
    txt: `
  [' kunkka_laugh', 'He-hu-hu-hu-hu-huhhuha!'] -ch 470 <br />
  [' kunkka_thank', "You're a trusty mate!"] -ch 471 <br />
  [' kunkka_deny', 'Straight to the bottom with ya!'] -ch 472 <br />
  [' kunkka_1', "You don't have the sand."] -ch 473 <br />
  [' kunkka_2', 'Heh! Man overboard!'] -ch 474 <br />
  [' kunkka_3', "You're all washed up!"] -ch 475 <br />
  [' kunkka_4', "Just to be clear, if I call you mate, I don't mean it literally."] -ch 476 <br />
  [' kunkka_5', 'You set sail for fail.'] -ch 477 <br />
  `
  },
  {
    label: "Legion commander",
    txt: `
  [' legion_commander_laugh', 'Ah ha ha ha ha ha ha!'] -ch 478 <br />
  [' legion_commander_thank', 'Not bad at all!'] -ch 479 <br />
  [' legion_commander_deny', 'Try harder.'] -ch 480 <br />
  [' legion_commander_1', 'Sound strategy.'] -ch 481 <br />
  [' legion_commander_2', 'Nice mustache.'] -ch 482 <br />
  [' legion_commander_3', 'I will tear you apart!'] -ch 483 <br />
  [' legion_commander_4', 'Son of a...!'] -ch 484 <br />
  [' legion_commander_5', 'That escalated quickly!'] -ch 485 <br />
  `
  },
  {
    label: "Leshrac",
    txt: `
  [' leshrac_laugh', 'Ha ha ha ha ha ha ha!'] -ch 486 <br />
  [' leshrac_thank', 'To a future of grief.'] -ch 487 <br />
  [' leshrac_deny', 'Have a little humility.'] -ch 488 <br />
  [' leshrac_1', 'Two legged abomination.'] -ch 489 <br />
  [' leshrac_2', "I'll take that."] -ch 490 <br />
  [' leshrac_3', 'Ah, all in service to imbalance.'] -ch 491 <br />
  [' leshrac_4', 'A foregone conclusion.'] -ch 492 <br />
  [' leshrac_5', 'A thousand of your kind have fallen before me.'] -ch 493 <br />
  `
  },
  {
    label: "Lich",
    txt: `
  [' lich_laugh', 'Ha ha ha ha ha ha ha ha!'] -ch 494 <br />
  [' lich_thank', 'Stay frosty!'] -ch 495 <br />
  [' lich_deny', "Watch your step, it's six feet down."] -ch 496 <br />
  [' lich_1', "Can't kill the dead."] -ch 497 <br />
  [' lich_2', 'Does it tingle?'] -ch 498 <br />
  [' lich_3', 'Feel my cold embrace!'] -ch 499 <br />
  [' lich_4', "Who's the number one now?"] -ch 500 <br />
  [' lich_5', 'Ah, Ice Frog!'] -ch 501 <br />
  `
  },
  {
    label: "Life stealer",
    txt: `
  [' life_stealer_laugh', 'Ha! Ha ha ha ha!'] -ch 502 <br />
  [' life_stealer_thank', 'This pleases the Master.'] -ch 503 <br />
  [' life_stealer_deny', 'Surprise!'] -ch 504 <br />
  [' life_stealer_1', 'The master is here!'] -ch 505 <br />
  [' life_stealer_2', 'Alone with my rage!'] -ch 506 <br />
  [' life_stealer_3', 'Sweet, sweet violence.'] -ch 507 <br />
  [' life_stealer_4', 'You feel the red hand of death.'] -ch 508 <br />
  [' life_stealer_5', 'Ta-da!'] -ch 509 <br />
  `
  },
  {
    label: "Lina",
    txt: `
  [' lina_laugh', 'Ha ha ha ha ha ha ha!'] -ch 510 <br />
  [' lina_thank', 'That was hot!'] -ch 511 <br />
  [' lina_deny', "Burns, doesn't it?"] -ch 512 <br />
  [' lina_1', "That wasn't too bright."] -ch 513 <br />
  [' lina_2', 'Wanna play with fire?'] -ch 514 <br />
  [' lina_3', 'What a punk.'] -ch 515 <br />
  [' lina_4', 'What in the blazes?'] -ch 516 <br />
  [' lina_5', 'Come to mama!'] -ch 517 <br />
  `
  },
  {
    label: "Lion",
    txt: `
  [' lion_laugh', 'Who-ha-ha-ha-ha-ha-ha-he-hawha!'] -ch 518 <br />
  [' lion_thank', 'Oh, hell yes.'] -ch 519 <br />
  [' lion_deny', 'Ah, sorry to disappoint you.'] -ch 520 <br />
  [' lion_1', 'You thought to tame the lion?'] -ch 521 <br />
  [' lion_2', 'Feel the rage of a mage!'] -ch 522 <br />
  [' lion_3', 'To hell with you!'] -ch 523 <br />
  [' lion_4', "I've got the magic touch."] -ch 524 <br />
  [' lion_5', "I've been to hell and back, and back to hell...and back."] -ch 525 <br />
  `
  },
  {
    label: "Lone druid",
    txt: `
  [' lone_druid_laugh', 'Ah ha ha ha ha hah!'] -ch 526 <br />
  [' lone_druid_thank', 'Skill comes with age!'] -ch 527 <br />
  [' lone_druid_deny', 'Ah, my old self!'] -ch 528 <br />
  [' lone_druid_1', 'Synergy!'] -ch 529 <br />
  [' lone_druid_2', 'I should know better by now.'] -ch 530 <br />
  [' lone_druid_3', 'A worthy exchange.'] -ch 531 <br />
  [' lone_druid_4', 'What have you done?'] -ch 532 <br />
  [' lone_druid_5', 'Auuuuuhhh!'] -ch 533 <br />
  `
  },
  {
    label: "Luna",
    txt: `
  [' luna_laugh', 'Ah ha ha ha ha ha ha!'] -ch 534 <br />
  [' luna_thank', 'Blessings upon a loyal warrior.'] -ch 535 <br />
  [' luna_deny', 'Interesting!'] -ch 536 <br />
  [' luna_1', 'Lost in the woods, are you?'] -ch 537 <br />
  [' luna_2', "W'scratch that idea!"] -ch 538 <br />
  [' luna_3', "Isn't that a pretty thing!"] -ch 539 <br />
  [' luna_4', 'Piece of shite wizard.'] -ch 540 <br />
  [' luna_5', 'Let the sky tear down the unworthy!'] -ch 541 <br />
  `
  },
  {
    label: "Lycan",
    txt: `
  [' lycan_laugh', 'Ah ha ha ha ha ha ha ha.'] -ch 542 <br />
  [' lycan_thank', 'You fought well and true.'] -ch 543 <br />
  [' lycan_deny', 'Go ahead, just try to kill me!'] -ch 544 <br />
  [' lycan_1', 'Ha! That was a mauling.'] -ch 545 <br />
  [' lycan_2', 'I am the alpha wolf.'] -ch 546 <br />
  [' lycan_3', 'The wolf is at your door.'] -ch 547 <br />
  [' lycan_4', 'Wolves need no armor.'] -ch 548 <br />
  [' lycan_5', "I've taken a Lycan to you. Ha ha ha ha ha."] -ch 549 <br />
  `
  },
  {
    label: "Magnus Magnataur",
    txt: `
  [' magnataur_laugh', 'Ah ha ha.'] -ch 550 <br />
  [' magnataur_thank', 'Yes, this will do just fine.'] -ch 551 <br />
  [' magnataur_deny', 'This is bullshit!'] -ch 552 <br />
  [' magnataur_1', 'Ha ha ha ha! What did you expect?'] -ch 553 <br />
  [' magnataur_2', 'Are you kidding me?'] -ch 554 <br />
  [' magnataur_3', "All in a day's work."] -ch 555 <br />
  [' magnataur_4', 'How shameful.'] -ch 556 <br />
  [' magnataur_5', 'I tell you what. You touch my horn, I break your face.'] -ch 557 <br />
  `
  },
  {
    label: "Marci",
    txt: `
  [' marci_laugh Laughing Whistle'] -ch 558 <br />
  [' marci_thank Thankful Whistle'] -ch 559 <br />
  [' marci_deny', 'Denying Whistle'] -ch 560 <br />
  [' marci_1', 'Friendly Whistle'] -ch 561 <br />
  [' marci_2', 'Greeting Whistle'] -ch 562 <br />
  [' marci_3', 'Mildly Impressed Whistle'] -ch 563 <br />
  [' marci_4', 'Surprised Whistle'] -ch 564 <br />
  [' marci_5', 'Sad Whistle'] -ch 565 <br />
  `
  },
  {
    label: "Mars",
    txt: `
  [' mars_laugh', 'Huh huh ha ha ha ha ha ha ha haaa!'] -ch 566 <br />
  [' mars_thank', 'My thanks will come later, when you least expect it!'] -ch 567 <br />
  [' mars_deny', "Ohh, that's no good."] -ch 568 <br />
  [' mars_1', " I'll always remember how foolish you looked."] -ch 569 <br />
  [' mars_2', ' The only one surprised by this is you.'] -ch 570 <br />
  [' mars_3', ' Fight me!'] -ch 571 <br />
  [' mars_4', ' DADADA DA DA DA-DA-DA!'] -ch 572 <br />
  [' mars_5', ' THIS IS DOOOOTAAAAA!'] -ch 573 <br />
  `
  },
  {
    label: "Medusa",
    txt: `
  [' medusa_laugh', 'Hmm hmm hmm ha ha ha ha ha!'] -ch 574 <br />
  [' medusa_thank', 'Brilliant.'] -ch 575 <br />
  [' medusa_deny', 'In your face.'] -ch 576 <br />
  [' medusa_1', "Don't resist the cobra, little bird."] -ch 577 <br />
  [' medusa_2', 'Oh, crap!'] -ch 578 <br />
  [' medusa_3', 'You knew I was cold-blooded.'] -ch 579 <br />
  [' medusa_4', "Gaze upon Medusa's beauty, and despair!"] -ch 580 <br />
  [' medusa_5', 'Nobody look at anybody!'] -ch 581 <br />
  `
  },
  {
    label: "Meepo",
    txt: `
  [' meepo_laugh', 'Hnya Hnyahnyaha ha ha ha!'] -ch 582 <br />
  [' meepo_thank', "Now that's what I'm talking about!"] -ch 583 <br />
  [' meepo_deny', 'How ya doin?'] -ch 584 <br />
  [' meepo_1', "Ah for cryin' out loud!"] -ch 585 <br />
  [' meepo_2', 'Hey what kind of scam you running here?'] -ch 586 <br />
  [' meepo_3', "This is a real freakin' embarrasment."] -ch 587 <br />
  [' meepo_4', "I feel fine. Don't know what everyone's worried about."] -ch 588 <br />
  [' meepo_5', "Freakin' unbelievable."] -ch 589 <br />
  `
  },
  {
    label: "Mirana",
    txt: `
  [' mirana_laugh', 'Ha ha ha ha ha ha!'] -ch 590 <br />
  [' mirana_thank', 'A gift from the night!'] -ch 591 <br />
  [' mirana_deny', 'Catch us if you can!'] -ch 592 <br />
  [' mirana_1', 'You have learned nothing.'] -ch 593 <br />
  [' mirana_2', 'Nicely done!'] -ch 594 <br />
  [' mirana_3', 'Run like the dogs you are!'] -ch 595 <br />
  [' mirana_4', 'Here, kitty-kitty-kitty....'] -ch 596 <br />
  [' mirana_5', 'It was not luck but skill!'] -ch 597 <br />
  `
  },
  {
    label: "Monkey king",
    txt: `
  [' monkey_king_laugh', 'Ah ha ha ha ha ha. Woohoohoohoo. Ohhh heee.'] -ch 598 <br />
  [' monkey_king_thank', "This'll work."] -ch 599 <br />
  [' monkey_king_deny', 'I feel better already.'] -ch 600 <br />
  [' monkey_king_1', "Ohh, I'll be signing autographs out front."] -ch 601 <br />
  [' monkey_king_2', 'Ok, that was unexpected.'] -ch 602 <br />
  [' monkey_king_3', 'Alright.'] -ch 603 <br />
  [' monkey_king_4', "I'll pretend I didn't enjoy this."] -ch 604 <br />
  [' monkey_king_5', 'This was over before it started.'] -ch 605 <br />
  `
  },
  {
    label: "Morphling",
    txt: `
  [' morphling_laugh', 'Ha ha ha ha ha ha ha ha ha ha!'] -ch 606 <br />
  [' morphling_thank', 'I like what I see.'] -ch 607 <br />
  [' morphling_deny', "You're in over your head."] -ch 608 <br />
  [' morphling_1', 'Boiling rage!'] -ch 609 <br />
  [' morphling_2', 'Always refreshing.'] -ch 610 <br />
  [' morphling_3', 'The tide has turned!'] -ch 611 <br />
  [' morphling_4', "Didn't you see me waving?"] -ch 612 <br />
  [' morphling_5', "You're washed up!"] -ch 613 <br />
  `
  },
  {
    label: "Naga siren",
    txt: `
  [' naga_siren_laugh', 'Ahehehaheh.'] -ch 614 <br />
  [' naga_siren_thank', 'That went swimmingly.'] -ch 615 <br />
  [' naga_siren_deny', 'A sour note.'] -ch 616 <br />
  [' naga_siren_1', "You're in deep now."] -ch 617 <br />
  [' naga_siren_2', "That's enough out of you."] -ch 618 <br />
  [' naga_siren_3', "That's got to suck."] -ch 619 <br />
  [' naga_siren_4', 'It had to be.'] -ch 620 <br />
  [' naga_siren_5', "My legs! I can't feel my legs."] -ch 621 <br />
  `
  },
  {
    label: "Necrolyte",
    txt: `
  [' necrolyte_laugh', 'Ha ha ha ha ha ha ha ha ha ha ha ha!'] -ch 630 <br />
  [' necrolyte_thank', 'Breathe it in.'] -ch 631 <br />
  [' necrolyte_deny', 'That was costly.'] -ch 632 <br />
  [' necrolyte_1', 'The stench of death is upon you.'] -ch 633 <br />
  [' necrolyte_2', "What do you mean, cheer up? I'm quite cheerful."] -ch 634 <br />
  [' necrolyte_3', "It's all gone rotten."] -ch 635 <br />
  [' necrolyte_4', 'To your health. Ha ha ha ha ha ha ha ha ha.'] -ch 636 <br />
  [' necrolyte_5', 'I am the rotten apple that spoils the bunch.'] -ch 637 <br />
  `
  },
  {
    label: "Shadow Fiend",
    txt: `
  [' Shadow Fiend_laugh', 'Ah ha ha ha ha ha!'] -ch 790 <br />
  [' Shadow Fiend_thank', 'Well bless your soul.'] -ch 791 <br />
  [' Shadow Fiend_deny', 'Outplayed.'] -ch 792 <br />
  [' Shadow Fiend_1', 'A beautiful soul for my collection.'] -ch 793 <br />
  [' Shadow Fiend_2', 'Fear my presence.'] -ch 794 <br />
  [' Shadow Fiend_3', "I'll take it."] -ch 795 <br />
  [' Shadow Fiend_4', 'You can never hide!'] -ch 796 <br />
  [' nevermore_5', 'Ozh icha gluth izh sol.'] -ch 797 <br />
  `
  },
  {
    label: "Night stalker",
    txt: `
  [' night_stalker_laugh', 'Heh heh heh hah heh hehhhh.'] -ch 638 <br />
  [' night_stalker_thank', 'Now they will suffer.'] -ch 639 <br />
  [' night_stalker_deny', 'Your nightmare continues.'] -ch 640 <br />
  [' night_stalker_1', 'Just what I needed!'] -ch 641 <br />
  [' night_stalker_2', "There's no escape."] -ch 642 <br />
  [' night_stalker_3', 'Darkness hungers.'] -ch 643 <br />
  [' night_stalker_4', "It's feeding time."] -ch 644 <br />
  [' night_stalker_5', "I'm the beast of bedtime tales."] -ch 645 <br />
  `
  },
  {
    label: "Nyx",
    txt: `
  [' nyx_assassin_laugh', 'Heehehheh Nyx, Nyx.'] -ch 646 <br />
  [' nyx_assassin_thank', 'Nice.'] -ch 647 <br />
  [' nyx_assassin_deny', 'How did this happen?'] -ch 648 <br />
  [' nyx_assassin_1', 'Talentless.'] -ch 649 <br />
  [' nyx_assassin_2', 'Nyx chichcichcihcihchi.'] -ch 650 <br />
  [' nyx_assassin_3', "I'm waiting for you."] -ch 651 <br />
  [' nyx_assassin_4', 'Assassinated.'] -ch 652 <br />
  [' nyx_assassin_5', 'Nyx, Nyx, Nyx, Nyx.'] -ch 653 <br />
  `
  },
  {
    label: "Obsidian OD",
    txt: `
  [' obsidian_destroyer_laugh', 'Ha ha ha ha ha ha ha ha ha!'] -ch 654 <br />
  [' obsidian_destroyer_thank', 'I have solid intelligence on what is to come.'] -ch 655 <br />
  [' obsidian_destroyer_deny', 'My purpose fulfilled.'] -ch 656 <br />
  [' obsidian_destroyer_1', 'Your future is grim.'] -ch 657 <br />
  [' obsidian_destroyer_2', 'This changes nothing.'] -ch 658 <br />
  [' obsidian_destroyer_3', 'You let yourself get carried away.'] -ch 659 <br />
  [' obsidian_destroyer_4', 'I am ill disposed towards you.'] -ch 660 <br />
  [' obsidian_destroyer_5', "You're insane."] -ch 661 <br />
  `
  },
  {
    label: "Ogre",
    txt: `
  [' ogre_magi_laugh', "Hee hee he he he he he aha ha... What're we laughing about?"] -ch 662 <br />
  [' ogre_magi_thank', 'That was skill all right. Pure skill.'] -ch 663 <br />
  [' ogre_magi_deny', "Ye gods, how'd that happen? What the. Who'd the. How'd that happen?"] -ch 664 <br />
  [' ogre_magi_1', 'Expertise! From the experts.'] -ch 665 <br />
  [' ogre_magi_2', 'Good work. I thought that was you.'] -ch 666 <br />
  [' ogre_magi_3', 'You need to work on your skill. Like us.'] -ch 667 <br />
  [' ogre_magi_4', 'We gave you a head start!'] -ch 668 <br />
  [' ogre_magi_5', 'That had to hurt. I almost feel bad.'] -ch 669 <br />
  `
  },
  {
    label: "Omniknight",
    txt: `
  [' omniknight_laugh', 'Mehooweheh hwh hew.'] -ch 670 <br />
  [' omniknight_thank', 'Beautiful.'] -ch 671 <br />
  [' omniknight_deny', 'Nailed it.'] -ch 672 <br />
  [' omniknight_1', 'Another stain on the battlefield.'] -ch 673 <br />
  [' omniknight_2', 'Your guilt weighs heavily.'] -ch 674 <br />
  [' omniknight_3', 'Be at peace you wretched fool.'] -ch 675 <br />
  [' omniknight_4', 'You chose poorly.'] -ch 676 <br />
  [' omniknight_5', 'The All-knowing One senses your regret.'] -ch 677 <br />
  `
  },
  {
    label: "Oracle",
    txt: `
  [' oracle_laugh', 'He ha ha he ha ha!'] -ch 678 <br />
  [' oracle_thank', 'Faith in fate restored.'] -ch 679 <br />
  [' oracle_deny', 'I want to die.'] -ch 680 <br />
  [' oracle_1', 'I saw that.'] -ch 681 <br />
  [' oracle_2', 'I am shocked. Shocked!'] -ch 682 <br />
  [' oracle_3', 'That was odd indeed!'] -ch 683 <br />
  [' oracle_4', "Even you should've seen that coming. But you didn't."] -ch 684 <br />
  [' oracle_5', 'You will die in a house fire.'] -ch 685 <br />
  `
  },
  {
    label: "Pangolier",
    txt: `
  [' pangolier_laugh', 'Aaaah ha hahahaha hahahaaa huu.'] -ch 686 <br />
  [' pangolier_thank', 'Was that intentional? It looked intentional.'] -ch 687 <br />
  [' pangolier_deny', "Were you watching? That's how it's done."] -ch 688 <br />
  [' pangolier_1', 'Try a bit harder next time...'] -ch 689 <br />
  [' pangolier_2', 'That does not look good.'] -ch 690 <br />
  [' pangolier_3', 'Beep Beep!'] -ch 691 <br />
  [' pangolier_4', "Now it's just unfair."] -ch 692 <br />
  [' pangolier_5', 'So this whole mess is all your fault?'] -ch 693 <br />
  `
  },
  {
    label: "Phantom_assassin",
    txt: `
  [' phantom_assassin_laugh', 'Ho ho ho ho ho ha ha ha'] -ch 694 <br />
  [' phantom_assassin_thank', 'Mmm, divine.'] -ch 695 <br />
  [' phantom_assassin_deny', 'All according to plan.'] -ch 696 <br />
  [' phantom_assassin_1', 'Death at my hands is an honor.'] -ch 697 <br />
  [' phantom_assassin_2', 'That went well, I think.'] -ch 698 <br />
  [' phantom_assassin_3', 'How many daggers am I holding up?'] -ch 699 <br />
  [' phantom_assassin_4', 'Ha, ahhh, ha ha, no no no.'] -ch 700 <br />
  [' phantom_assassin_5', "I'm an immaterial girl!"] -ch 701 <br />
  `
  },
  {
    label: "Phantom_lancer",
    txt: `
  [' phantom_lancer_laugh', 'Ha ha ha ha ha ha ha ha ha ha ha ha ha!'] -ch 702 <br />
  [' phantom_lancer_thank', 'What an amazing thing.'] -ch 703 <br />
  [' phantom_lancer_deny', 'Such simple minds.'] -ch 704 <br />
  [' phantom_lancer_1', 'We come for you!'] -ch 705 <br />
  [' phantom_lancer_2', 'Now this is just silly.'] -ch 706 <br />
  [' phantom_lancer_3', 'We have more where that came from.'] -ch 707 <br />
  [' phantom_lancer_4', 'Numbers have accomplished what strategy alone could not.'] -ch 708 <br />
  [' phantom_lancer_5', 'We outnumbered you. We outnumber them all!'] -ch 709 <br />
  `
  },
  {
    label: "Phoenix",
    txt: `
  [' phoenix_laugh', 'Laughing Squawk'] -ch 710 <br />
  [' phoenix_thank', 'Thankful Squawk'] -ch 711 <br />
  [' phoenix_deny', 'Denying Squawk'] -ch 712 <br />
  [' phoenix_1', 'Triumphant Squawk'] -ch 713 <br />
  [' phoenix_2', 'Sorrowful Squawk'] -ch 714 <br />
  [' phoenix_3', 'Taunting Squawk'] -ch 715 <br />
  [' phoenix_4', 'Angry Squawk'] -ch 716 <br />
  [' phoenix_5', 'Contented Squawk'] -ch 717 <br />
  `
  },
  {
    label: "Puck",
    txt: `
  [' puck_laugh', 'Ha ha!'] -ch 718 <br />
  [' puck_thank', 'Interesting.'] -ch 719 <br />
  [' puck_deny', 'You might wish to retract your last move.'] -ch 720 <br />
  [' puck_1', 'Greetings!'] -ch 721 <br />
  [' puck_2', 'What is this, a game of some sort?'] -ch 722 <br />
  [' puck_3', 'The greatest tragedy of our eon.'] -ch 723 <br />
  [' puck_4', 'Was that smart?'] -ch 724 <br />
  [' puck_5', 'I am unfamiliar with this feeling. Is it joy?'] -ch 725 <br />
  `
  },
  {
    label: "Pudge",
    txt: `
  [' pudge_laugh', 'Hm hm hm hm ha ha ha.'] -ch 726 <br />
  [' pudge_thank', "That's a bit of all right."] -ch 727 <br />
  [' pudge_deny', 'Oops. Was that me?'] -ch 728 <br />
  [' pudge_1', 'Time for a little butchery!'] -ch 729 <br />
  [' pudge_2', 'Nothing better than a nice raw liver.'] -ch 730 <br />
  [' pudge_3', 'Whateva.'] -ch 731 <br />
  [' pudge_4', 'Delicious...'] -ch 732 <br />
  [' pudge_5', "You'll look good with an apple in yer mouth!"] -ch 733 <br />
  `
  },
  {
    label: "Pugna",
    txt: `
  [' pugna_laugh', 'Ha ha ha ha ha ha.'] -ch 734 <br />
  [' pugna_thank', 'Ah, this is going to be good.'] -ch 735 <br />
  [' pugna_deny', "You're only making it worse."] -ch 736 <br />
  [' pugna_1', 'Aw, did I do that?'] -ch 737 <br />
  [' pugna_2', 'Anyone miss me?'] -ch 738 <br />
  [' pugna_3', 'Time to earn myself a bad reputation.'] -ch 739 <br />
  [' pugna_4', 'You did that to yourself.'] -ch 740 <br />
  [' pugna_5', "You're wasting your life."] -ch 741 <br />
  `
  },
  {
    label: "Queenofpain",
    txt: `
  [' queenofpain_laugh', 'Uh ha ha ha ha ha ha ha ha ha ha ha!'] -ch 742 <br />
  [' queenofpain_thank', 'There will be pain, there will be screaming.'] -ch 743 <br />
  [' queenofpain_deny', 'You hurt the ones you love.'] -ch 744 <br />
  [' queenofpain_1', 'That was perfect.'] -ch 745 <br />
  [' queenofpain_2', 'Does this hurt?'] -ch 746 <br />
  [' queenofpain_3', 'I love it when you resist.'] -ch 747 <br />
  [' queenofpain_4', 'You want me? Come get me.'] -ch 748 <br />
  [' queenofpain_5', "I know I'm a pain, but you love me anyway."] -ch 749 <br />
  `
  },
  {
    label: "Rattletrap",
    txt: `
  [' rattletrap_laugh', 'Ha ha ha ha ha ha!'] -ch 254 <br />
  [' rattletrap_thank', 'That oughta rattle em, yeah!'] -ch 255 <br />
  [' rattletrap_deny', 'Not what you expected?'] -ch 256 <br />
  [' rattletrap_1', 'Tell me someone saw that!'] -ch 257 <br />
  [' rattletrap_2', 'Ha, that tickles!'] -ch 258 <br />
  [' rattletrap_3', 'Whoa!'] -ch 259 <br />
  [' rattletrap_4', 'Bleep bloop, I am a robot. Eh, just kidding.'] -ch 260 <br />
  [' rattletrap_5', 'That is so metal!'] -ch 261 <br />
  `
  },
  {
    label: "Razor",
    txt: `
  [' razor_laugh', 'Ah ha ha ha ha ha ha ha ha.'] -ch 750 <br />
  [' razor_thank', 'I sense a connection between us!'] -ch 751 <br />
  [' razor_deny', 'You can run. You should run.'] -ch 752 <br />
  [' razor_1', 'You are dead. Dead.'] -ch 753 <br />
  [' razor_2', 'Your ashes will fall like rain.'] -ch 754 <br />
  [' razor_3', 'Shocking.'] -ch 755 <br />
  [' razor_4', 'This will only hurt forever.'] -ch 756 <br />
  [' razor_5', 'Zapped your ass!'] -ch 757 <br />
  `
  },
  {
    label: "Riki",
    txt: `
  [' riki_laugh', 'hoo hoo hoo hoo hoo hoo hoo.'] -ch 758 <br />
  [' riki_thank', 'Contract complete.'] -ch 759 <br />
  [' riki_deny', "Heh-ho, you didn't see that coming."] -ch 760 <br />
  [' riki_1', 'Why prolong the inevitable?'] -ch 761 <br />
  [' riki_2', 'Peek-a-boo.'] -ch 762 <br />
  [' riki_3', "If you can see me, you're already dead."] -ch 763 <br />
  [' riki_4', "I've been here the whole time."] -ch 764 <br />
  [' riki_5', "Oh you're dead. What a surprise."] -ch 765 <br />
  `
  },
  {
    label: "Rubick",
    txt: `
  [' rubick_laugh', 'Ah ha ha! Eh he he he he he he he he he!'] -ch 766 <br />
  [' rubick_thank', 'Excellent idea!'] -ch 767 <br />
  [' rubick_deny', 'I almost feel bad.'] -ch 768 <br />
  [' rubick_1', 'That perked me up a bit!'] -ch 769 <br />
  [' rubick_2', 'Your name offends me.'] -ch 770 <br />
  [' rubick_3', 'What a surprise!'] -ch 771 <br />
  [' rubick_4', 'Whoops!'] -ch 772 <br />
  [' rubick_5', 'Exquisite! Absolutely exquisite!'] -ch 773 <br />
  `
  },
  {
    label: "Sand king",
    txt: `
  [' sand_king_laugh', 'Ha ha ha ha ha ha ha!'] -ch 774 <br />
  [' sand_king_thank', 'You have done a great service.'] -ch 775 <br />
  [' sand_king_deny', "Stings, don't it?"] -ch 776 <br />
  [' sand_king_1', 'Bow to your liege.'] -ch 777 <br />
  [' sand_king_2', 'A Sandy V-V-Victory!'] -ch 778 <br />
  [' sand_king_3', "Where do you think you're going?"] -ch 779 <br />
  [' sand_king_4', 'You were expecting...Sandy Claws?'] -ch 780 <br />
  [' sand_king_5', "It's good to be King!"] -ch 781 <br />
  `
  },
  {
    label: "Shadow_demon",
    txt: `
  [' shadow_demon_laugh', 'Ha ha ha ha ha ha ha ha ha ha.'] -ch 782 <br />
  [' shadow_demon_thank', 'And they thought it could get no darker.'] -ch 783 <br />
  [' shadow_demon_deny', 'You conspired against me.'] -ch 784 <br />
  [' shadow_demon_1', "Izh vo'acha nesh."] -ch 785 <br />
  [' shadow_demon_2', 'Fall before me!'] -ch 786 <br />
  [' shadow_demon_3', 'Just your bad luck.'] -ch 787 <br />
  [' shadow_demon_4', 'Bow down.'] -ch 788 <br />
  [' shadow_demon_5', 'Cry some more.'] -ch 789 <br />
  `
  },
  {
    label: "Shadowshaman",
    txt: `
  [' shadow_shaman_laugh', 'Ha ha ha!'] -ch 798 <br />
  [' shadow_shaman_thank', 'My prayers are answered.'] -ch 799 <br />
  [' shadow_shaman_deny', 'Bukaw, bukaw!'] -ch 800 <br />
  [' shadow_shaman_1', 'I see for you a future full of death!'] -ch 801 <br />
  [' shadow_shaman_2', "You're not going anywhere."] -ch 802 <br />
  [' shadow_shaman_3', 'Heh ha ha hah, how refreshing!'] -ch 803 <br />
  [' shadow_shaman_4', 'Tastes like chicken!'] -ch 804 <br />
  [' shadow_shaman_5', 'Au-mosu-atikanu!'] -ch 805 <br />
  `
  },
  {
    label: "Timbersaw Shredder",
    txt: `
  [' Timbersaw_laugh', 'He he he he he!'] -ch 918 <br />
  [' Timbersaw_thank', 'I almost trust you.'] -ch 919 <br />
  [' shredder_deny', 'You mad? Cuz I am!'] -ch 920 <br />
  [' shredder_1', 'Oh yeah ha ha.'] -ch 921 <br />
  [' shredder_2', "Oh! Oh! Oh-oh-you see this? You see? Oh this is what I've always wanted! Oh I'm so happy!"] -ch 922 <br />
  [' shredder_3', "Oh god I think I'm going to be sick."] -ch 923 <br />
  [' shredder_4', 'Saw that coming. Ha! Get it?'] -ch 924 <br />
  [' shredder_5', 'Run run run run runrunrunrunrunrunrunrunrunrunrunrunrunrunrunrunrunrun!'] -ch 925 <br />
  `
  },
  {
    label: "Silencer",
    txt: `
  [' silencer_laugh', 'Ah ha ha.'] -ch 806 <br />
  [' silencer_thank', 'The silence deepens.'] -ch 807 <br />
  [' silencer_deny', 'You almost had that.'] -ch 808 <br />
  [' silencer_1', 'Calm yourselves.'] -ch 809 <br />
  [' silencer_2', 'What a racket.'] -ch 810 <br />
  [' silencer_3', 'Silence, fool!'] -ch 811 <br />
  [' silencer_4', 'All for naught.'] -ch 812 <br />
  [' silencer_5', 'Shhh, did you hear something?'] -ch 813 <br />
  `
  },
  {
    label: "Skeleton king",
    txt: `
  [' skeleton_king_laugh', 'AH HA HA HA HA!'] -ch 1070 <br />
  [' skeleton_king_thank', "I'LL HELP MY WEAK AND PUNY ALLIES WHERE I CAN."] -ch 1071 <br />
  [' skeleton_king_deny', 'SO WHAT IF I SWAGGER?'] -ch 1072 <br />
  [' skeleton_king_1', 'TAKE A KNEE, PEASANT.'] -ch 1073 <br />
  [' skeleton_king_2', 'VERY NICE.'] -ch 1074 <br />
  [' skeleton_king_3', 'I MISS MY BONES.'] -ch 1075 <br />
  [' skeleton_king_4', 'I NOW HAVE ALL THE SEXY.'] -ch 1076 <br />
  [' skeleton_king_5', "WELCOME TO ALL MY NEW SUBJECTS. NOW LET'S GET TO KNOW EACH OTHER."] -ch 1077 <br />
  `
  },
  {
    label: "Skywrath",
    txt: `
  [' skywrath_mage_laugh', 'Ha ha!'] -ch 814 <br />
  [' skywrath_mage_thank', 'I shall not report you.'] -ch 815 <br />
  [' skywrath_mage_deny', 'Down you go!'] -ch 816 <br />
  [' skywrath_mage_1', 'Ai, me!'] -ch 817 <br />
  [' skywrath_mage_2', 'That my friend was a mistake.'] -ch 818 <br />
  [' skywrath_mage_3', 'Twas honorably done.'] -ch 819 <br />
  [' skywrath_mage_5', 'The skies are dark with Skywrath power!'] -ch 820 <br />
  `
  },
  {
    label: "Slardar",
    txt: `
  [' slardar_laugh', 'Heh heeh heh hah hah ha hah hah!'] -ch 822 <br />
  [' slardar_thank', 'Total spawnage.'] -ch 823 <br />
  [' slardar_deny', 'My deepest sympathies.'] -ch 824 <br />
  [' slardar_1', 'I came a long way to see you die.'] -ch 825 <br />
  [' slardar_2', "You won't escape."] -ch 826 <br />
  [' slardar_3', "Jig's up."] -ch 827 <br />
  [' slardar_4', 'You were out of your depth.'] -ch 828 <br />
  [' slardar_5', 'Oh, how the deep ones will feast!'] -ch 829 <br />
  `
  },
  {
    label: "Slark",
    txt: `
  [' slark_laugh', 'Heh heh heh heh heh heh heh heh.'] -ch 830 <br />
  [' slark_thank', 'I know I can trust you guys.'] -ch 831 <br />
  [' slark_deny', 'On your belly and crawl.'] -ch 832 <br />
  [' slark_1', "I can't hear you."] -ch 833 <br />
  [' slark_2', 'Well that went bad quickly.'] -ch 834 <br />
  [' slark_3', 'You took the bait.'] -ch 835 <br />
  [' slark_4', 'Oh this makes it all worthwhile.'] -ch 836 <br />
  [' slark_5', "Oh that's very nice."] -ch 837 <br />
  `
  },
  {
    label: "Snapfire",
    txt: `
  [' snapfire_laugh', '', '', 'Woohoohoo ha ha ha!'] -ch 838 <br />
  [' snapfire_thank', '', '', 'Why thank you!'] -ch 839 <br />
  [' snapfire_deny', '', '', 'Yeee-haw!'] -ch 840 <br />
  [' snapfire_1', '', '', ' Who wants cookies? Well too bad!'] -ch 841 <br />
  [' snapfire_2', '', '', " Don't you sass me."] -ch 842 <br />
  [' snapfire_3', '', '', " There's too many darn wizards!"] -ch 843 <br />
  [' snapfire_4', '', '', " I won't eat you, dear. But Mortimer might."] -ch 844 <br />
  [' snapfire_5', '', '', " You lookin' for cookin' tips, violence, or both?"] -ch 845 <br />
  `
  },
  {
    label: "Sniper",
    txt: `
  [' sniper_laugh', 'Hee hee hee hee hee hee hee hee hee hee!'] -ch 846 <br />
  [' sniper_thank', "Target practice, payin' off!"] -ch 847 <br />
  [' sniper_deny', 'What the---?'] -ch 848 <br />
  [' sniper_1', 'Say goodbye to your head!'] -ch 849 <br />
  [' sniper_2', 'Dance! Ha ha ha ha! Dance!'] -ch 850 <br />
  [' sniper_3', 'Why am I smiling? This is what trigger-happy looks like.'] -ch 851 <br />
  [' sniper_4', 'What a dum-dum!'] -ch 852 <br />
  [' sniper_5', 'Ho ho ha ha!'] -ch 853 <br />
  `
  },
  {
    label: "Spectre",
    txt: `
  [' spectre_laugh', 'Ha ha ha ha ha ha ha ha ha!'] -ch 854 <br />
  [' spectre_thank', "I'll stand by you."] -ch 855 <br />
  [' spectre_deny', 'Wrong.'] -ch 856 <br />
  [' spectre_1', 'I do not understand.'] -ch 857 <br />
  [' spectre_2', 'What is this?'] -ch 858 <br />
  [' spectre_3', 'A useful skill.'] -ch 859 <br />
  [' spectre_4', 'Can no one understand me?'] -ch 860 <br />
  [' spectre_5', 'Miserable and ignorant.'] -ch 861 <br />
  `
  },
  {
    label: "Spirit breaker bara",
    txt: `
  [' spirit_breaker_laugh', 'Whoheheheahahah.'] -ch 862 <br />
  [' spirit_breaker_thank', "Hah, it's all coming together!"] -ch 863 <br />
  [' spirit_breaker_deny', "Stunning, isn't it?"] -ch 864 <br />
  [' spirit_breaker_1', 'My patience is rewarded.'] -ch 865 <br />
  [' spirit_breaker_2', "There's no escaping me."] -ch 866 <br />
  [' spirit_breaker_3', 'This is complete and utter bullshit!'] -ch 867 <br />
  [' spirit_breaker_4', "That's the spirit."] -ch 868 <br />
  [' spirit_breaker_5', 'That did not go as expected.'] -ch 869 <br />
  `
  },
  {
    label: "Storm spirit",
    txt: `
  [' storm_spirit_laugh', 'Hm hm hm hm hee hee hee ha ha.'] -ch 870 <br />
  [' storm_spirit_thank', "That's the spirit!"] -ch 871 <br />
  [' storm_spirit_deny', 'You blew it!'] -ch 872 <br />
  [' storm_spirit_1', 'I love this part!'] -ch 873 <br />
  [' storm_spirit_2', 'Lookin for me?'] -ch 874 <br />
  [' storm_spirit_3', 'Told you a storm was coming!'] -ch 875 <br />
  [' storm_spirit_4', 'Looking good!'] -ch 876 <br />
  [' storm_spirit_5', 'Glorious!'] -ch 877 <br />
  `
  },
  {
    label: "Sven",
    txt: `
  [' sven_laugh', 'Ahh ha ha ha! Ha ha ha ha!'] -ch 878 <br />
  [' sven_thank', 'You are a true friend.'] -ch 879 <br />
  [' sven_deny', 'You look stunned.'] -ch 880 <br />
  [' sven_1', 'Rogue Knight claims another.'] -ch 881 <br />
  [' sven_2', 'You deserved it.'] -ch 882 <br />
  [' sven_3', 'My honor compels me...to gloat.'] -ch 883 <br />
  [' sven_4', 'An expected outcome.'] -ch 884 <br />
  [' sven_5', 'Hm...now what do we learn from this.'] -ch 885 <br />
  `
  },
  {
    label: "Techies",
    txt: `
  [' techies_laugh', 'He he he, hehe ah ha! Oh ho ho oh oh ha ha ha!'] -ch 886 <br />
  [' techies_thank', 'Fun! Huhuhu!'] -ch 887 <br />
  [' techies_deny', "I was told there'd be a mushroom cloud!"] -ch 888 <br />
  [' techies_1', 'Oh crap!'] -ch 889 <br />
  [' techies_2', "Where'd he go? Everywhere!"] -ch 890 <br />
  [' techies_3', 'Gotcha!'] -ch 891 <br />
  [' techies_4', 'Just have a seat right over there. And let the smart people work.'] -ch 892 <br />
  [' techies_5', "I can't believe that worked."] -ch 893 <br />
  `
  },
  {
    label: "Templar assassin",
    txt: `
  [' templar_assassin_laugh', 'Ha ha ha ha ha ha ha!'] -ch 894 <br />
  [' templar_assassin_thank', "I'll take it."] -ch 895 <br />
  [' templar_assassin_deny', 'I saw that ending from miles away.'] -ch 896 <br />
  [' templar_assassin_1', "They'll never find your grave."] -ch 897 <br />
  [' templar_assassin_2', "It's a trap!"] -ch 898 <br />
  [' templar_assassin_3', 'The mystery deepens.'] -ch 899 <br />
  [' templar_assassin_4', 'Oh, snap!'] -ch 900 <br />
  [' templar_assassin_5', 'Feed me if you must.'] -ch 901 <br />
  `
  },
  {
    label: "Terrorblade",
    txt: `
  [' terrorblade_laugh', 'Hehahahahahh.'] -ch 902 <br />
  [' terrorblade_thank', 'What a handsome devil.'] -ch 903 <br />
  [' terrorblade_deny', "Oh, they're gonna hate me for this."] -ch 904 <br />
  [' terrorblade_1', 'Trick of the trade.'] -ch 905 <br />
  [' terrorblade_2', 'Your own worst enemy.'] -ch 906 <br />
  [' terrorblade_3', "Perhaps that wasn't wise."] -ch 907 <br />
  [' terrorblade_4', "A wise blade takes a fool's life."] -ch 908 <br />
  [' terrorblade_5', 'Fight me, cowards!'] -ch 909 <br />
  `
  },
  {
    label: "Tidehunter",
    txt: `
  [' tidehunter_laugh', 'Ah ha ha ha!'] -ch 910 <br />
  [' tidehunter_thank', "We'll turn this tide to our advantage."] -ch 911 <br />
  [' tidehunter_deny', 'You look ravaged.'] -ch 912 <br />
  [' tidehunter_1', "Ha ha ha ha ha ha, Now you're fish food."] -ch 913 <br />
  [' tidehunter_2', 'Ha ha I could eat a walrus.'] -ch 914 <br />
  [' tidehunter_3', 'Put a cork in it.'] -ch 915 <br />
  [' tidehunter_4', "Did you think I'd blunder? You must have mistaken me for Kunkka."] -ch 916 <br />
  [' tidehunter_5', "Who needs a big brain when you've got teeth like mine?"] -ch 917 <br />
  `
  },
  {
    label: "Tinker",
    txt: `
  [' tinker_laugh', 'Ah ha ha ha ha!'] -ch 926 <br />
  [' tinker_thank', 'Your talents surpass your loveliness.'] -ch 927 <br />
  [' tinker_deny', "Well isn't that something!"] -ch 928 <br />
  [' tinker_1', 'Pew, pew, pew pew pew!'] -ch 929 <br />
  [' tinker_2', 'I predicted all of this you know, all of it!'] -ch 930 <br />
  [' tinker_3', 'That was genius!'] -ch 931 <br />
  [' tinker_4', "I'm going to call that experiment, a failure."] -ch 932 <br />
  [' tinker_5', 'You can keep your magic, I have laser beams!'] -ch 933 <br />
  `
  },
  {
    label: "Tiny",
    txt: `
  [' tiny_laugh', 'Hehehehehuhhehehe.'] -ch 934 <br />
  [' tiny_thank', 'Are you ready to rubble?'] -ch 935 <br />
  [' tiny_deny', 'Well, look at that.'] -ch 936 <br />
  [' tiny_1', 'Rock em, sock em!'] -ch 937 <br />
  [' tiny_2', 'You got rocks in your head.'] -ch 938 <br />
  [' tiny_3', 'My apologies.'] -ch 939 <br />
  [' tiny_4', "You haven't got the stones."] -ch 940 <br />
  [' tiny_5', "It's hard to be this good."] -ch 941 <br />
  `
  },
  {
    label: "Treant",
    txt: `
  [' treant_laugh', 'Ah ho ho ho hoooo ho ho ho hm hm hm.'] -ch 942 <br />
  [' treant_thank', "I'm really freaking out."] -ch 943 <br />
  [' treant_deny', "That's what happens when I rush."] -ch 944 <br />
  [' treant_1', 'Are you lost?'] -ch 945 <br />
  [' treant_2', 'Careful.'] -ch 946 <br />
  [' treant_3', 'Trees can be ferocious if provoked.'] -ch 947 <br />
  [' treant_4', 'Ah, fresh fertilizer.'] -ch 948 <br />
  [' treant_5', 'Mmm? What happened?'] -ch 949 <br />
  `
  },
  {
    label: "Troll",
    txt: `
  [' troll_warlord_laugh', 'Yaaahahahaahhah.'] -ch 950 <br />
  [' troll_warlord_thank', 'Go crazy!'] -ch 951 <br />
  [' troll_warlord_deny', 'Unfortunate.'] -ch 952 <br />
  [' troll_warlord_1', 'Come back and die again.'] -ch 953 <br />
  [' troll_warlord_2', "You've got to be kidding."] -ch 954 <br />
  [' troll_warlord_3', 'Try not to feed.'] -ch 955 <br />
  [' troll_warlord_4', "This can't be happening."] -ch 956 <br />
  [' troll_warlord_5', "Why doesn't anybody like me?"] -ch 957 <br />
  `
  },
  {
    label: "Tusk",
    txt: `
  [' tusk_laugh', 'Oh boy! Ha ha ha ha ha!'] -ch 958 <br />
  [' tusk_thank', 'Fist Bump.'] -ch 959 <br />
  [' tusk_deny', 'Well I tried.'] -ch 960 <br />
  [' tusk_1', 'Are you okay?'] -ch 961 <br />
  [' tusk_2', 'Dohmvzm!'] -ch 962 <br />
  [' tusk_3', 'Tusky-duskie.'] -ch 963 <br />
  [' tusk_4', 'Oh, that had to hurt!'] -ch 964 <br />
  [' tusk_5', 'That was a big ball of failure.'] -ch 965 <br />
  `
  },
  {
    label: "Underlord",
    txt: `
  [' abyssal_underlord_laugh', 'Ah ha ha ha ha ha ha ha ha!'] -ch 966 <br />
  [' abyssal_underlord_thank', 'I do not thank.'] -ch 967 <br />
  [' abyssal_underlord_deny', 'Curses!'] -ch 968 <br />
  [' abyssal_underlord_1', 'Oh yes.'] -ch 969 <br />
  [' abyssal_underlord_2', 'Insignificant.'] -ch 970 <br />
  [' abyssal_underlord_3', 'Bow to your new lord.'] -ch 971 <br />
  [' abyssal_underlord_4', 'There is no hope.'] -ch 972 <br />
  [' abyssal_underlord_5', 'Hold on to your butts.'] -ch 973 <br />
  `
  },
  {
    label: "Undying",
    txt: `
  [' undying_laugh', 'Heh heh heh heh ha ha ha ha ha ha ha ha ha ha!'] -ch 974 <br />
  [' undying_thank', 'Tktktk sing your praises.'] -ch 975 <br />
  [' undying_deny', 'The maggots clean you.'] -ch 976 <br />
  [' undying_1', 'I hate life.'] -ch 977 <br />
  [' undying_2', 'I need… gummy vitamins.'] -ch 978 <br />
  [' undying_3', 'No hells. No heavens. Only this.'] -ch 979 <br />
  [' undying_4', 'Not feed.'] -ch 980 <br />
  [' undying_5', 'No brains.'] -ch 981 <br />
  `
  },
  {
    label: "Ursa",
    txt: `
  [' ursa_laugh', 'Hah! Hah! Hah-hah-hah!'] -ch 982 <br />
  [' ursa_thank', 'Is it spring already?'] -ch 983 <br />
  [' ursa_deny', 'A loss so small, the world will hardly notice.'] -ch 984 <br />
  [' ursa_1', 'A poor defense.'] -ch 985 <br />
  [' ursa_2', 'Fuzzy Wuzzy!'] -ch 986 <br />
  [' ursa_3', 'How is it you heard not my warnings?'] -ch 987 <br />
  [' ursa_4', 'Sweet as honey.'] -ch 988 <br />
  [' ursa_5', 'Mtlap tlap, not bad! Sllleup tlap tlap tlap.'] -ch 989 <br />
  `
  },
  {
    label: "Vengefulspirit",
    txt: `
  [' vengefulspirit_laugh', 'Hm ha ha ha ha ha ha!'] -ch 990 <br />
  [' vengefulspirit_thank', 'So sweet...'] -ch 991 <br />
  [' vengefulspirit_deny', 'What...?'] -ch 992 <br />
  [' vengefulspirit_1', 'I feel better already.'] -ch 993 <br />
  [' vengefulspirit_2', 'Swapsies!'] -ch 994 <br />
  [' vengefulspirit_3', 'Mwahahhahahahahahaha!'] -ch 995 <br />
  [' vengefulspirit_4', 'Prepare for the wave of terror: boo!'] -ch 996 <br />
  [' vengefulspirit_5', 'The pain of my enemies is the only pleasure left to me.'] -ch 997 <br />
  `
  },
  {
    label: "Venomancer",
    txt: `
  [' venomancer_laugh', 'Sss eh he he he he.'] -ch 998 <br />
  [' venomancer_thank', 'Plague our enemies!'] -ch 999 <br />
  [' venomancer_deny', 'Oh, costly.'] -ch 1000 <br />
  [' venomancer_1', 'Nothing touches the heart like my venom.'] -ch 1001 <br />
  [' venomancer_2', 'Ssss, that burns.'] -ch 1002 <br />
  [' venomancer_3', "You can't run from the venomous one!"] -ch 1003 <br />
  [' venomancer_4', 'I owe it all to me.'] -ch 1004 <br />
  [' venomancer_5', 'Ah, sweet toxicity!'] -ch 1005 <br />
  `
  },
  {
    label: "Viper",
    txt: `
  [' viper_laugh', 'Tehehehehar.'] -ch 1006 <br />
  [' viper_thank', 'Air support arrives.'] -ch 1007 <br />
  [' viper_deny', 'Close but not quite.'] -ch 1008 <br />
  [' viper_1', 'Death...from above.'] -ch 1009 <br />
  [' viper_2', 'I fly into a rage.'] -ch 1010 <br />
  [' viper_3', 'There are better deaths.'] -ch 1011 <br />
  [' viper_4', "Burns...doesn't it."] -ch 1012 <br />
  [' viper_5', 'Who needs legs, when you got wings?'] -ch 1013 <br />
  `
  },
  {
    label: "Visage",
    txt: `
  [' visage_laugh', 'Ah ha ha ha ha ha ha ha ha!'] -ch 1014 <br />
  [' visage_thank', 'Visage like.'] -ch 1015 <br />
  [' visage_deny', 'You again?'] -ch 1016 <br />
  [' visage_1', 'And so you die.'] -ch 1017 <br />
  [' visage_2', 'I have failed.'] -ch 1018 <br />
  [' visage_3', 'You shall not pass!'] -ch 1019 <br />
  [' visage_4', 'Face of death.'] -ch 1020 <br />
  [' visage_5', 'Ahh this is much better.'] -ch 1021 <br />
  `
  },
  {
    label: "Void_spirit",
    txt: `
  [' void_spirit_laugh', '', ' Hn ha ha ha ha ha.'] -ch 1022 <br />
  [' void_spirit_thank', '', ' This pleases me to no end.'] -ch 1023 <br />
  [' void_spirit_deny', '', ' I sense...distortions in the void.'] -ch 1024 <br />
  [' void_spirit_1', '', '', 'Your anger is useless here.'] -ch 1025 <br />
  [' void_spirit_2', '', '', 'Rest easy, child.'] -ch 1026 <br />
  [' void_spirit_3', '', '', 'Such a limited imagination you have.'] -ch 1027 <br />
  [' void_spirit_4', '', '', 'Living things die.'] -ch 1028 <br />
  [' void_spirit_5', '', '', 'How can you carry hope in the face of the void?'] -ch 1029 <br />
  `
  },
  {
    label: "Warlock",
    txt: `
  [' warlock_laugh', 'Ho ha ha ha ha ha ha ha ha!'] -ch 1030 <br />
  [' warlock_thank', 'Let chaos reign!'] -ch 1031 <br />
  [' warlock_deny', 'Really? You just did that?'] -ch 1032 <br />
  [' warlock_1', 'I feed you to my fiends.'] -ch 1033 <br />
  [' warlock_2', 'Zan korobos kor koramord!'] -ch 1034 <br />
  [' warlock_3', 'Another name in my grimoire.'] -ch 1035 <br />
  [' warlock_4', 'Pipsqueak.'] -ch 1036 <br />
  [' warlock_5', 'Can you believe this? Ah ha ha ha ha ha ha ha ha ha!'] -ch 1037 <br />
  `
  },
  {
    label: "Weaver",
    txt: `
  [' weaver_laugh', 'Hehehhehah!'] -ch 1038 <br />
  [' weaver_thank', 'The pattern is complete.'] -ch 1039 <br />
  [' weaver_deny', "You thought you had me, didn't you?"] -ch 1040 <br />
  [' weaver_1', "I'm sensing a pattern here."] -ch 1041 <br />
  [' weaver_2', "There's a snag in your plans."] -ch 1042 <br />
  [' weaver_3', 'A pattern repeats.'] -ch 1043 <br />
  [' weaver_4', 'A feast for my beetles.'] -ch 1044 <br />
  [' weaver_5', 'Ho, snap!'] -ch 1045 <br />
  `
  },
  {
    label: "Windrunner",
    txt: `
  [' windrunner_laugh', 'Hah-ha-ha-ha-ha!'] -ch 1046 <br />
  [' windrunner_thank', 'Easy breezy'] -ch 1047 <br />
  [' windrunner_deny', "I don't think so."] -ch 1048 <br />
  [' windrunner_1', "Could be worse. Oh, wait, no it couldn't."] -ch 1049 <br />
  [' windrunner_2', "You're not going anywhere."] -ch 1050 <br />
  [' windrunner_3', "If you weren't so damned dead, I'd shoot you again."] -ch 1051 <br />
  [' windrunner_4', 'Tell me this did not just happen.'] -ch 1052 <br />
  [' windrunner_5', 'I blow you a kiss.'] -ch 1053 <br />
  `
  },
  {
    label: "Winter wyvern",
    txt: `
  [' winter_wyvern_laugh', 'Ah ha ha ha ha ha ha ha ha ha ha!'] -ch 1054 <br />
  [' winter_wyvern_thank', 'Wonderful!'] -ch 1055 <br />
  [' winter_wyvern_deny', 'Chill, baby.'] -ch 1056 <br />
  [' winter_wyvern_1', 'That was not wise!'] -ch 1057 <br />
  [' winter_wyvern_2', 'Poor dear.'] -ch 1058 <br />
  [' winter_wyvern_3', 'Never ask a wyvern why.'] -ch 1059 <br />
  [' winter_wyvern_4', 'Well deserved!'] -ch 1060 <br />
  [' winter_wyvern_5', "Ah, I've never felt this good! Ah ha ha ha ha!"] -ch 1061 <br />
  `
  },
  {
    label: "Wisp Io",
    txt: `
  [' wisp_laugh', 'Laughing Beeps'] -ch 438 <br />
  [' wisp_thank', 'Thankful Beeps'] -ch 439 <br />
  [' wisp_deny', 'Denying Beeps'] -ch 440 <br />
  [' wisp_1', 'Friendly Beeps'] -ch 441 <br />
  [' wisp_2', 'Triumphant Beeps'] -ch 442 <br />
  [' wisp_3', 'Sorrowful Beeps'] -ch 443 <br />
  [' wisp_4', 'Angry Beeps'] -ch 444 <br />
  [' wisp_5', 'Meditative Beeps'] -ch 445 <br />
  `
  },
  {
    label: "Witch doctor",
    txt: `
  [' witch_doctor_laugh', 'Hoo hah hoo hoo hah.'] -ch 1062 <br />
  [' witch_doctor_thank', 'Feeling good, man.'] -ch 1063 <br />
  [' witch_doctor_deny', 'Wait for it...wait for it...'] -ch 1064 <br />
  [' witch_doctor_1', 'Dat make a big mess.'] -ch 1065 <br />
  [' witch_doctor_2', 'Someone call de doctor?'] -ch 1066 <br />
  [' witch_doctor_3', 'Oh, look at it go.'] -ch 1067 <br />
  [' witch_doctor_4', "Stick a bone in it. You're done."] -ch 1068 <br />
  [' witch_doctor_5', 'Oyeaaaaah.'] -ch 1069 <br />
  `
  },
  {
    label: "Zeus",
    txt: `
  [' zuus_laugh', 'Ha ha ha ha ha ha ha ha ha!'] -ch 1078 <br />
  [' zuus_thank', "By my whiskers, that's good stuff!"] -ch 1079 <br />
  [' zuus_deny', 'Ha ha ha ha ha. Well what did you expect?'] -ch 1080 <br />
  [' zuus_1', 'Wait for it!'] -ch 1081 <br />
  [' zuus_2', "That's all it takes to kill you?"] -ch 1082 <br />
  [' zuus_3', "Oh...this can't be good."] -ch 1083 <br />
  [' zuus_4', "Thund'rous applause!"] -ch 1084 <br />
  [' zuus_5', 'Did you think you could hide from a god?'] -ch 1085 <br />
  `
  }
];
const top100Films = [
  {
    label: `[' abaddon_laugh', 'Ha ha ha ha ha ha ha ha ha.']`,
    txt: `
[' abaddon_laugh', 'Ha ha ha ha ha ha ha ha ha.'] -ch 110
`
  },
  {
    label: `[' abaddon_thank', 'The House Avernus will disown me for that.']`,
    txt: `
[' abaddon_thank', 'The House Avernus will disown me for that.'] -ch 111
`
  },
  {
    label: `[' abaddon_deny', 'Never.']`,
    txt: `
[' abaddon_deny', 'Never.'] -ch 112
`
  },
  {
    label: `[' abaddon_1', 'Bow to your lord.']`,
    txt: `
[' abaddon_1', 'Bow to your lord.'] -ch 113
`
  },
  {
    label: `[' abaddon_2', 'How can such a thing be?']`,
    txt: `
[' abaddon_2', 'How can such a thing be?'] -ch 114
`
  },
  {
    label: `[' abaddon_3', 'In the mists of time you are but a blur.']`,
    txt: `
[' abaddon_3', 'In the mists of time you are but a blur.'] -ch 115
`
  },
  {
    label: `[' abaddon_4', 'By what right do you tread here?']`,
    txt: `
[' abaddon_4', 'By what right do you tread here?'] -ch 116
`
  },
  {
    label: `[' abaddon_5', 'The fog of war is no match for the mist of fate.']`,
    txt: `
[' abaddon_5', 'The fog of war is no match for the mist of fate.'] -ch 117
`
  },
  {
    label: `[' alchemist_laugh', 'Ha ha ha ha ha!']`,
    txt: `
[' alchemist_laugh', 'Ha ha ha ha ha!'] -ch 118
`
  },
  {
    label: `[' alchemist_thank', "We've got pretty good chemistry."]`,
    txt: `
[' alchemist_thank', "We've got pretty good chemistry."] -ch 119
`
  },
  {
    label: `[' alchemist_deny', 'That was genius!']`,
    txt: `
[' alchemist_deny', 'That was genius!'] -ch 120
`
  },
  {
    label: `[' alchemist_1', 'Hey, everybody!']`,
    txt: `
[' alchemist_1', 'Hey, everybody!'] -ch 121
`
  },
  {
    label: `[' alchemist_2', 'Talk about overreacting.']`,
    txt: `
[' alchemist_2', 'Talk about overreacting.'] -ch 122
`
  },
  {
    label: `[' alchemist_3', "I can't believe I'm seeing this with my own eyes!"]`,
    txt: `
[' alchemist_3', "I can't believe I'm seeing this with my own eyes!"] -ch 123
`
  },
  {
    label: `[' alchemist_4', 'What a mess!']`,
    txt: `
[' alchemist_4', 'What a mess!'] -ch 124
`
  },
  {
    label: `[' alchemist_5', 'Failure is just another kind of success. The wrong kind.']`,
    txt: `
[' alchemist_5', 'Failure is just another kind of success. The wrong kind.'] -ch 125
`
  },
  {
    label: `[' ancient_apparition_laugh', 'Hm hm hm ha ha ha ha ha ha ha!']`,
    txt: `
[' ancient_apparition_laugh', 'Hm hm hm ha ha ha ha ha ha ha!'] -ch 126
`
  },
  {
    label: `[' ancient_apparition_thank', 'Interesting.']`,
    txt: `
[' ancient_apparition_thank', 'Interesting.'] -ch 127
`
  },
  {
    label: `[' ancient_apparition_deny', 'A cold wind blows.']`,
    txt: `
[' ancient_apparition_deny', 'A cold wind blows.'] -ch 128
`
  },
  {
    label: `[' ancient_apparition_1', 'Your blood runs cold.']`,
    txt: `
[' ancient_apparition_1', 'Your blood runs cold.'] -ch 129
`
  },
  {
    label: `[' ancient_apparition_2', "I'm too old for this!"]`,
    txt: `
[' ancient_apparition_2', "I'm too old for this!"] -ch 130
`
  },
  {
    label: `[' ancient_apparition_3', 'I waited ages but it was worth it.']`,
    txt: `
[' ancient_apparition_3', 'I waited ages but it was worth it.'] -ch 131
`
  },
  {
    label: `[' ancient_apparition_4', 'Time to break the ice!']`,
    txt: `
[' ancient_apparition_4', 'Time to break the ice!'] -ch 132
`
  },
  {
    label: `[' ancient_apparition_5', 'Icefog!']`,
    txt: `
[' ancient_apparition_5', 'Icefog!'] -ch 133
`
  },
  {
    label: `['antimage_laugh', 'Ha ha ha ha ha ha ha ha ha ha ha ha!']`,
    txt: `
['antimage_laugh', 'Ha ha ha ha ha ha ha ha ha ha ha ha!'] -ch 134
`
  },
  {
    label: `[' antimage_thank', "I'll give them a drubbing they'll not soon forget!"]`,
    txt: `
[' antimage_thank', "I'll give them a drubbing they'll not soon forget!"] -ch 135
`
  },
  {
    label: `[' antimage_deny', 'Are you even trying?']`,
    txt: `
[' antimage_deny', 'Are you even trying?'] -ch 136
`
  },
  {
    label: `[' antimage_1', 'Magic is an abomination.']`,
    txt: `
[' antimage_1', 'Magic is an abomination.'] -ch 137
`
  },
  {
    label: `[' antimage_2', 'A disappointment.']`,
    txt: `
[' antimage_2', 'A disappointment.'] -ch 138
`
  },
  {
    label: `[' antimage_3', 'Magic thyself out of that.']`,
    txt: `
[' antimage_3', 'Magic thyself out of that.'] -ch 139
`
  },
  {
    label: `[' antimage_4', 'Thou art damned!']`,
    txt: `
[' antimage_4', 'Thou art damned!'] -ch 140
`
  },
  {
    label: `[' antimage_5', "Send thy Dead God's legions, I will put them all to death."]`,
    txt: `
[' antimage_5', "Send thy Dead God's legions, I will put them all to death."] -ch 141
`
  },
  {
    label: `[' arc_warden_laugh', 'Hm hm hm hm hm hm hm hm hm hm hm hm hm hm hm.']`,
    txt: `
[' arc_warden_laugh', 'Hm hm hm hm hm hm hm hm hm hm hm hm hm hm hm.'] -ch 142
`
  },
  {
    label: `[' arc_warden_thank', 'Your grace is noted.']`,
    txt: `
[' arc_warden_thank', 'Your grace is noted.'] -ch 143
`
  },
  {
    label: `[' arc_warden_deny', 'Do not be selfish.']`,
    txt: `
[' arc_warden_deny', 'Do not be selfish.'] -ch 144
`
  },
  {
    label: `[' arc_warden_1', 'Busted.']`,
    txt: `
[' arc_warden_1', 'Busted.'] -ch 145
`
  },
  {
    label: `[' arc_warden_2', 'What have you done?']`,
    txt: `
[' arc_warden_2', 'What have you done?'] -ch 146
`
  },
  {
    label: `[' arc_warden_3', 'A mere diversion.']`,
    txt: `
[' arc_warden_3', 'A mere diversion.'] -ch 147
`
  },
  {
    label: `[' arc_warden_4', 'Frowny face.']`,
    txt: `
[' arc_warden_4', 'Frowny face.'] -ch 148
`
  },
  {
    label: `[' arc_warden_5', 'You do not have to be mad.']`,
    txt: `
[' arc_warden_5', 'You do not have to be mad.'] -ch 149
`
  },
  {
    label: `[' axe_laugh', 'Ha ha ha ha ha ha!']`,
    txt: `
[' axe_laugh', 'Ha ha ha ha ha ha!'] -ch 150
`
  },
  {
    label: `[' axe_thank', 'Axe likes this very much.']`,
    txt: `
[' axe_thank', 'Axe likes this very much.'] -ch 151
`
  },
  {
    label: `[' axe_deny', 'You deserve nothing!']`,
    txt: `
[' axe_deny', 'You deserve nothing!'] -ch 152
`
  },
  {
    label: `[' axe_1', 'You fought badly--died worse.']`,
    txt: `
[' axe_1', 'You fought badly--died worse.'] -ch 153
`
  },
  {
    label: `[' axe_2', 'I said good day, sir!']`,
    txt: `
[' axe_2', 'I said good day, sir!'] -ch 154
`
  },
  {
    label: `[' axe_3', 'Axe misjudged?']`,
    txt: `
[' axe_3', 'Axe misjudged?'] -ch 155
`
  },
  {
    label: `[' axe_4', 'Axe has no time for all this jibber-jabber.']`,
    txt: `
[' axe_4', 'Axe has no time for all this jibber-jabber.'] -ch 156
`
  },
  {
    label: `[' axe_5', 'What happened? Axe happened!']`,
    txt: `
[' axe_5', 'What happened? Axe happened!'] -ch 157
`
  },
  {
    label: `[' bane_laugh', 'Ha ha ha ha ha ha ha ha ha!']`,
    txt: `
[' bane_laugh', 'Ha ha ha ha ha ha ha ha ha!'] -ch 158
`
  },
  {
    label: `[' bane_thank', "You're so nice."]`,
    txt: `
[' bane_thank', "You're so nice."] -ch 159
`
  },
  {
    label: `[' bane_deny', 'Better luck next time.']`,
    txt: `
[' bane_deny', 'Better luck next time.'] -ch 160
`
  },
  {
    label: `[' bane_1', 'Bane of your existence.']`,
    txt: `
[' bane_1', 'Bane of your existence.'] -ch 161
`
  },
  {
    label: `[' bane_2', "I've been dreaming of this moment."]`,
    txt: `
[' bane_2', "I've been dreaming of this moment."] -ch 162
`
  },
  {
    label: `[' bane_3', 'Fair exchange.']`,
    txt: `
[' bane_3', 'Fair exchange.'] -ch 163
`
  },
  {
    label: `[' bane_4', 'Now your nightmare lasts forever.']`,
    txt: `
[' bane_4', 'Now your nightmare lasts forever.'] -ch 164
`
  },
  {
    label: `[' bane_5', 'Ah ya ya ya ya ya yai eeyas!']`,
    txt: `
[' bane_5', 'Ah ya ya ya ya ya yai eeyas!'] -ch 165
`
  },
  {
    label: `[' batrider_laugh', 'He ha ha!']`,
    txt: `
[' batrider_laugh', 'He ha ha!'] -ch 166
`
  },
  {
    label: `[' batrider_thank', "Ah, that's what I'm talking about!"]`,
    txt: `
[' batrider_thank', "Ah, that's what I'm talking about!"] -ch 167
`
  },
  {
    label: `[' batrider_deny', 'This is gonna sting.']`,
    txt: `
[' batrider_deny', 'This is gonna sting.'] -ch 168
`
  },
  {
    label: `[' batrider_1', 'Aw yeah, off we ride into the sunset.']`,
    txt: `
[' batrider_1', 'Aw yeah, off we ride into the sunset.'] -ch 169
`
  },
  {
    label: `[' batrider_2', 'Life just got interesting!']`,
    txt: `
[' batrider_2', 'Life just got interesting!'] -ch 170
`
  },
  {
    label: `[' batrider_3', "I'm sappin your will to live!"]`,
    txt: `
[' batrider_3', "I'm sappin your will to live!"] -ch 171
`
  },
  {
    label: `[' batrider_4', 'Whoa, sick burn!']`,
    txt: `
[' batrider_4', 'Whoa, sick burn!'] -ch 172
`
  },
  {
    label: `[' batrider_5', 'That was lame.']`,
    txt: `
[' batrider_5', 'That was lame.'] -ch 173
`
  },
  {
    label: `[' beastmaster_laugh', 'Howeh heh heh eh hah heh heh heh.']`,
    txt: `
[' beastmaster_laugh', 'Howeh heh heh eh hah heh heh heh.'] -ch 174
`
  },
  {
    label: `[' beastmaster_thank', "Sic 'em!"]`,
    txt: `
[' beastmaster_thank', "Sic 'em!"] -ch 175
`
  },
  {
    label: `[' beastmaster_deny', "I'll be creeping while you are sleeping."]`,
    txt: `
[' beastmaster_deny', "I'll be creeping while you are sleeping."] -ch 176
`
  },
  {
    label: `[' beastmaster_1', 'The worms will have you.']`,
    txt: `
[' beastmaster_1', 'The worms will have you.'] -ch 177
`
  },
  {
    label: `[' beastmaster_2', 'A strict no-kill policy.']`,
    txt: `
[' beastmaster_2', 'A strict no-kill policy.'] -ch 178
`
  },
  {
    label: `[' beastmaster_3', 'Aroo arooew!']`,
    txt: `
[' beastmaster_3', 'Aroo arooew!'] -ch 179
`
  },
  {
    label: `[' beastmaster_4', "Hmm, wish I'd learned how to read."]`,
    txt: `
[' beastmaster_4', "Hmm, wish I'd learned how to read."] -ch 180
`
  },
  {
    label: `[' beastmaster_5', 'Hoo hoo hoo.']`,
    txt: `
[' beastmaster_5', 'Hoo hoo hoo.'] -ch 181
`
  },
  {
    label: `[' bloodseeker_laugh', 'Hmm-heh-heh-heh-heh-ha!']`,
    txt: `
[' bloodseeker_laugh', 'Hmm-heh-heh-heh-heh-ha!'] -ch 182
`
  },
  {
    label: `[' bloodseeker_thank', 'So much blood.']`,
    txt: `
[' bloodseeker_thank', 'So much blood.'] -ch 183
`
  },
  {
    label: `[' bloodseeker_deny', 'No blood for you.']`,
    txt: `
[' bloodseeker_deny', 'No blood for you.'] -ch 184
`
  },
  {
    label: `[' bloodseeker_1', "I'm seeing red...and it's amazing!"]`,
    txt: `
[' bloodseeker_1', "I'm seeing red...and it's amazing!"] -ch 185
`
  },
  {
    label: `[' bloodseeker_2', "Don't be negative...be positive."]`,
    txt: `
[' bloodseeker_2', "Don't be negative...be positive."] -ch 186
`
  },
  {
    label: `[' bloodseeker_3', 'Go ahead...run.']`,
    txt: `
[' bloodseeker_3', 'Go ahead...run.'] -ch 187
`
  },
  {
    label: `[' bloodseeker_4', 'Lie down...have a cookie.']`,
    txt: `
[' bloodseeker_4', 'Lie down...have a cookie.'] -ch 188
`
  },
  {
    label: `[' bloodseeker_5', 'Over the field of battle, the smell of blood rises like a promise.']`,
    txt: `
[' bloodseeker_5', 'Over the field of battle, the smell of blood rises like a promise.'] -ch 189
`
  },
  {
    label: `[' bounty_hunter_laugh', 'Ah ha ha ha ha ha ha ha ha.']`,
    txt: `
[' bounty_hunter_laugh', 'Ah ha ha ha ha ha ha ha ha.'] -ch 190
`
  },
  {
    label: `[' bounty_hunter_thank', 'My allies have earned their keep.']`,
    txt: `
[' bounty_hunter_thank', 'My allies have earned their keep.'] -ch 191
`
  },
  {
    label: `[' bounty_hunter_deny', 'How many of you do I have to kill?']`,
    txt: `
[' bounty_hunter_deny', 'How many of you do I have to kill?'] -ch 192
`
  },
  {
    label: `[' bounty_hunter_1', 'Just business, nothing personal.']`,
    txt: `
[' bounty_hunter_1', 'Just business, nothing personal.'] -ch 193
`
  },
  {
    label: `[' bounty_hunter_2', 'A wise hunter knows patience.']`,
    txt: `
[' bounty_hunter_2', 'A wise hunter knows patience.'] -ch 194
`
  },
  {
    label: `[' bounty_hunter_3', "Stings, don't it?"]`,
    txt: `
[' bounty_hunter_3', "Stings, don't it?"] -ch 195
`
  },
  {
    label: `[' bounty_hunter_4', "You can run but you can't hide."]`,
    txt: `
[' bounty_hunter_4', "You can run but you can't hide."] -ch 196
`
  },
  {
    label: `[' bounty_hunter_5', "They'll tell tales of this."]`,
    txt: `
[' bounty_hunter_5', "They'll tell tales of this."] -ch 197
`
  },
  {
    label: `[' brewmaster_laugh', 'Hehaahehah.']`,
    txt: `
[' brewmaster_laugh', 'Hehaahehah.'] -ch 198
`
  },
  {
    label: `[' brewmaster_thank', 'Ah, I love you guys.']`,
    txt: `
[' brewmaster_thank', 'Ah, I love you guys.'] -ch 199
`
  },
  {
    label: `[' brewmaster_deny', 'Better luck next time.']`,
    txt: `
[' brewmaster_deny', 'Better luck next time.'] -ch 200
`
  },
  {
    label: `[' brewmaster_1', "Now I'm feeling it."]`,
    txt: `
[' brewmaster_1', "Now I'm feeling it."] -ch 201
`
  },
  {
    label: `[' brewmaster_2', 'Oh, so bubbly!']`,
    txt: `
[' brewmaster_2', 'Oh, so bubbly!'] -ch 202
`
  },
  {
    label: `[' brewmaster_3', "What's wrong? Can't hold your liquor?"]`,
    txt: `
[' brewmaster_3', "What's wrong? Can't hold your liquor?"] -ch 203
`
  },
  {
    label: `[' brewmaster_4', "It's happy hour!"]`,
    txt: `
[' brewmaster_4', "It's happy hour!"] -ch 204
`
  },
  {
    label: `[' brewmaster_5', 'What kind of pub is this?']`,
    txt: `
[' brewmaster_5', 'What kind of pub is this?'] -ch 205
`
  },
  {
    label: `[' bristleback_laugh', 'Hehey hahaha.']`,
    txt: `
[' bristleback_laugh', 'Hehey hahaha.'] -ch 206
`
  },
  {
    label: `[' bristleback_thank', 'Bright and breezy.']`,
    txt: `
[' bristleback_thank', 'Bright and breezy.'] -ch 207
`
  },
  {
    label: `[' bristleback_deny', 'Ah, now I feel better.']`,
    txt: `
[' bristleback_deny', 'Ah, now I feel better.'] -ch 208
`
  },
  {
    label: `[' bristleback_1', "Oooh, that's lovely days."]`,
    txt: `
[' bristleback_1', "Oooh, that's lovely days."] -ch 209
`
  },
  {
    label: `[' bristleback_2', 'No way.']`,
    txt: `
[' bristleback_2', 'No way.'] -ch 210
`
  },
  {
    label: `[' bristleback_3', 'Oh, you want some of this… eh?']`,
    txt: `
[' bristleback_3', 'Oh, you want some of this… eh?'] -ch 211
`
  },
  {
    label: `[' bristleback_4', "Who's squealing now, eh? Ha, aha ha heh."]`,
    txt: `
[' bristleback_4', "Who's squealing now, eh? Ha, aha ha heh."] -ch 212
`
  },
  {
    label: `[' bristleback_5', 'Well, what have we here.']`,
    txt: `
[' bristleback_5', 'Well, what have we here.'] -ch 213
`
  },
  {
    label: `[' broodmother_laugh', 'Ha ha ha ha ha.']`,
    txt: `
[' broodmother_laugh', 'Ha ha ha ha ha.'] -ch 214
`
  },
  {
    label: `[' broodmother_thank', 'What a lovely brood.']`,
    txt: `
[' broodmother_thank', 'What a lovely brood.'] -ch 215
`
  },
  {
    label: `[' broodmother_deny', 'I need this like I need another pair of legs.']`,
    txt: `
[' broodmother_deny', 'I need this like I need another pair of legs.'] -ch 216
`
  },
  {
    label: `[' broodmother_1', 'Delicious.']`,
    txt: `
[' broodmother_1', 'Delicious.'] -ch 217
`
  },
  {
    label: `[' broodmother_2', "You're not afraid of spiders, are you?"]`,
    txt: `
[' broodmother_2', "You're not afraid of spiders, are you?"] -ch 218
`
  },
  {
    label: `[' broodmother_3', "Don't die, my darlings."]`,
    txt: `
[' broodmother_3', "Don't die, my darlings."] -ch 219
`
  },
  {
    label: `[' broodmother_4', 'Oh so beautiful.']`,
    txt: `
[' broodmother_4', 'Oh so beautiful.'] -ch 220
`
  },
  {
    label: `[' broodmother_5', 'Sss-sss-ssslurp!']`,
    txt: `
[' broodmother_5', 'Sss-sss-ssslurp!'] -ch 221
`
  },
  {
    label: `[' centaur_laugh', 'Heheeeh hahah ehha.']`,
    txt: `
[' centaur_laugh', 'Heheeeh hahah ehha.'] -ch 222
`
  },
  {
    label: `[' centaur_thank', 'I shall honor your name.']`,
    txt: `
[' centaur_thank', 'I shall honor your name.'] -ch 223
`
  },
  {
    label: `[' centaur_deny', 'Stomped.']`,
    txt: `
[' centaur_deny', 'Stomped.'] -ch 224
`
  },
  {
    label: `[' centaur_1', 'Mmmmm.']`,
    txt: `
[' centaur_1', 'Mmmmm.'] -ch 225
`
  },
  {
    label: `[' centaur_2', 'What a waste.']`,
    txt: `
[' centaur_2', 'What a waste.'] -ch 226
`
  },
  {
    label: `[' centaur_3', 'Back to hell with you.']`,
    txt: `
[' centaur_3', 'Back to hell with you.'] -ch 227
`
  },
  {
    label: `[' centaur_4', 'Oh, yes, fear my hoofbeats.']`,
    txt: `
[' centaur_4', 'Oh, yes, fear my hoofbeats.'] -ch 228
`
  },
  {
    label: `[' centaur_5', 'Hurts you more than it hurts me.']`,
    txt: `
[' centaur_5', 'Hurts you more than it hurts me.'] -ch 229
`
  },
  {
    label: `[' chaos_knight_laugh', 'Oo ho ho ha ha ha ha ha ha ha ha ha ha ha!']`,
    txt: `
[' chaos_knight_laugh', 'Oo ho ho ha ha ha ha ha ha ha ha ha ha ha!'] -ch 230
`
  },
  {
    label: `[' chaos_knight_thank', 'Yes. Yes!']`,
    txt: `
[' chaos_knight_thank', 'Yes. Yes!'] -ch 231
`
  },
  {
    label: `[' chaos_knight_deny', 'I consign you to dust.']`,
    txt: `
[' chaos_knight_deny', 'I consign you to dust.'] -ch 232
`
  },
  {
    label: `[' chaos_knight_1', 'You were no match.']`,
    txt: `
[' chaos_knight_1', 'You were no match.'] -ch 233
`
  },
  {
    label: `[' chaos_knight_2', 'Your reputation precedes you.']`,
    txt: `
[' chaos_knight_2', 'Your reputation precedes you.'] -ch 234
`
  },
  {
    label: `[' chaos_knight_3', 'Where ride the horsemen death shall follow.']`,
    txt: `
[' chaos_knight_3', 'Where ride the horsemen death shall follow.'] -ch 235
`
  },
  {
    label: `[' chaos_knight_4', 'Long have I waited.']`,
    txt: `
[' chaos_knight_4', 'Long have I waited.'] -ch 236
`
  },
  {
    label: `[' chaos_knight_5', 'We descend into chaos.']`,
    txt: `
[' chaos_knight_5', 'We descend into chaos.'] -ch 237
`
  },
  {
    label: `[' chen_laugh', 'Hehehmehmehmmm.']`,
    txt: `
[' chen_laugh', 'Hehehmehmehmmm.'] -ch 238
`
  },
  {
    label: `[' chen_thank', 'Oh, thank God.']`,
    txt: `
[' chen_thank', 'Oh, thank God.'] -ch 239
`
  },
  {
    label: `[' chen_deny', "Can't escape your sins."]`,
    txt: `
[' chen_deny', "Can't escape your sins."] -ch 240
`
  },
  {
    label: `[' chen_1', 'Found unworthy.']`,
    txt: `
[' chen_1', 'Found unworthy.'] -ch 241
`
  },
  {
    label: `[' chen_2', 'What blasphemy is this?']`,
    txt: `
[' chen_2', 'What blasphemy is this?'] -ch 242
`
  },
  {
    label: `[' chen_3', 'The time draws nigh.']`,
    txt: `
[' chen_3', 'The time draws nigh.'] -ch 243
`
  },
  {
    label: `[' chen_4', 'The persecution starts now!']`,
    txt: `
[' chen_4', 'The persecution starts now!'] -ch 244
`
  },
  {
    label: `[' chen_5', 'A fulfillment of the prophecy.']`,
    txt: `
[' chen_5', 'A fulfillment of the prophecy.'] -ch 245
`
  },
  {
    label: `[' clinkz_laugh', 'Ah ha ha ha ha.']`,
    txt: `
[' clinkz_laugh', 'Ah ha ha ha ha.'] -ch 246
`
  },
  {
    label: `[' clinkz_thank', 'Well done.']`,
    txt: `
[' clinkz_thank', 'Well done.'] -ch 247
`
  },
  {
    label: `[' clinkz_deny', 'You almost had it too.']`,
    txt: `
[' clinkz_deny', 'You almost had it too.'] -ch 248
`
  },
  {
    label: `[' clinkz_1', "I'll burn your body to ashes."]`,
    txt: `
[' clinkz_1', "I'll burn your body to ashes."] -ch 249
`
  },
  {
    label: `[' clinkz_2', 'Fight fire with fire.']`,
    txt: `
[' clinkz_2', 'Fight fire with fire.'] -ch 250
`
  },
  {
    label: `[' clinkz_3', 'Thanks for the target practice.']`,
    txt: `
[' clinkz_3', 'Thanks for the target practice.'] -ch 251
`
  },
  {
    label: `[' clinkz_4', 'Yes!']`,
    txt: `
[' clinkz_4', 'Yes!'] -ch 252
`
  },
  {
    label: `[' clinkz_5', "Fire grows hungrier the more it's fed."]`,
    txt: `
[' clinkz_5', "Fire grows hungrier the more it's fed."] -ch 253
`
  },
  {
    label: `[' crystal_maiden_laugh', 'Ah ha ha ha ha ha.']`,
    txt: `
[' crystal_maiden_laugh', 'Ah ha ha ha ha ha.'] -ch 262
`
  },
  {
    label: `[' crystal_maiden_thank', 'Very cool of you!']`,
    txt: `
[' crystal_maiden_thank', 'Very cool of you!'] -ch 263
`
  },
  {
    label: `[' crystal_maiden_deny', 'Now nobody wins!']`,
    txt: `
[' crystal_maiden_deny', 'Now nobody wins!'] -ch 264
`
  },
  {
    label: `[' crystal_maiden_1', "You'll make a nice snow angel."]`,
    txt: `
[' crystal_maiden_1', "You'll make a nice snow angel."] -ch 265
`
  },
  {
    label: `[' crystal_maiden_2', "I've got goosebumps!"]`,
    txt: `
[' crystal_maiden_2', "I've got goosebumps!"] -ch 266
`
  },
  {
    label: `[' crystal_maiden_3', "I didn't see that coming."]`,
    txt: `
[' crystal_maiden_3', "I didn't see that coming."] -ch 267
`
  },
  {
    label: `[' crystal_maiden_4', 'It just keeps getting better.']`,
    txt: `
[' crystal_maiden_4', 'It just keeps getting better.'] -ch 268
`
  },
  {
    label: `[' crystal_maiden_5', 'Is it cold in here or is it just me?']`,
    txt: `
[' crystal_maiden_5', 'Is it cold in here or is it just me?'] -ch 269
`
  },
  {
    label: `[' dark_seer_laugh', 'Heheh yeheheh hey heehhhe yehhey yehe heheh eheh yeh.']`,
    txt: `
[' dark_seer_laugh', 'Heheh yeheheh hey heehhhe yehhey yehe heheh eheh yeh.'] -ch 270
`
  },
  {
    label: `[' dark_seer_thank', 'Very good.']`,
    txt: `
[' dark_seer_thank', 'Very good.'] -ch 271
`
  },
  {
    label: `[' dark_seer_deny', "Hh, didn't see that coming, did you?"]`,
    txt: `
[' dark_seer_deny', "Hh, didn't see that coming, did you?"] -ch 272
`
  },
  {
    label: `[' dark_seer_1', 'Your life, much like your head, lacked a point.']`,
    txt: `
[' dark_seer_1', 'Your life, much like your head, lacked a point.'] -ch 273
`
  },
  {
    label: `[' dark_seer_2', 'I cannot believe that worked.']`,
    txt: `
[' dark_seer_2', 'I cannot believe that worked.'] -ch 274
`
  },
  {
    label: `[' dark_seer_3', 'Hoooahahaaaheeh.']`,
    txt: `
[' dark_seer_3', 'Hoooahahaaaheeh.'] -ch 275
`
  },
  {
    label: `[' dark_seer_4', "You've hit a wall."]`,
    txt: `
[' dark_seer_4', "You've hit a wall."] -ch 276
`
  },
  {
    label: `[' dark_seer_5', 'We are not so different, my enemies and I. Except my brain is much larger.']`,
    txt: `
[' dark_seer_5', 'We are not so different, my enemies and I. Except my brain is much larger.'] -ch 277
`
  },
  {
    label: `[' dark_willow_laugh', 'Hahaha ahaha ahaha ahhahahahahaa!']`,
    txt: `
[' dark_willow_laugh', 'Hahaha ahaha ahaha ahhahahahahaa!'] -ch 278
`
  },
  {
    label: `[' dark_willow_thank', 'Just what I was waiting for.']`,
    txt: `
[' dark_willow_thank', 'Just what I was waiting for.'] -ch 279
`
  },
  {
    label: `[' dark_willow_deny', "I won't lie, that was unexpected..."]`,
    txt: `
[' dark_willow_deny', "I won't lie, that was unexpected..."] -ch 280
`
  },
  {
    label: `[' dark_willow_1', 'No. Just... no.']`,
    txt: `
[' dark_willow_1', 'No. Just... no.'] -ch 281
`
  },
  {
    label: `[' dark_willow_2', 'Never had a chance...']`,
    txt: `
[' dark_willow_2', 'Never had a chance...'] -ch 282
`
  },
  {
    label: `[' dark_willow_3', "Oh-ho. Don't mind me. Just a wee fairy going about her business."]`,
    txt: `
[' dark_willow_3', "Oh-ho. Don't mind me. Just a wee fairy going about her business."] -ch 283
`
  },
  {
    label: `[' dark_willow_4', "I don't know what I was expecting."]`,
    txt: `
[' dark_willow_4', "I don't know what I was expecting."] -ch 284
`
  },
  {
    label: `[' dark_willow_5', 'This makes absolutely no sense.']`,
    txt: `
[' dark_willow_5', 'This makes absolutely no sense.'] -ch 285
`
  },
  {
    label: `[' dawnbreaker_laugh', 'Ha ha ha ha ha ha ha ha ha ha ha ha!']`,
    txt: `
[' dawnbreaker_laugh', 'Ha ha ha ha ha ha ha ha ha ha ha ha!'] -ch 294
`
  },
  {
    label: `[' dawnbreaker_thank', 'Thank you, you precious weak thing.']`,
    txt: `
[' dawnbreaker_thank', 'Thank you, you precious weak thing.'] -ch 295
`
  },
  {
    label: `[' dawnbreaker_deny', "That's a strange manner of conduct."]`,
    txt: `
[' dawnbreaker_deny', "That's a strange manner of conduct."] -ch 296
`
  },
  {
    label: `[' dawnbreaker_1', ' The lesson for you is never try.']`,
    txt: `
[' dawnbreaker_1', ' The lesson for you is never try.'] -ch 297
`
  },
  {
    label: `[' dawnbreaker_2', ' Can you not make yourself better?']`,
    txt: `
[' dawnbreaker_2', ' Can you not make yourself better?'] -ch 298
`
  },
  {
    label: `[' dawnbreaker_3', ' Even at a fraction of my best, I outshine you immeasurably.']`,
    txt: `
[' dawnbreaker_3', ' Even at a fraction of my best, I outshine you immeasurably.'] -ch 299
`
  },
  {
    label: `[' dawnbreaker_4', ' There are rules about that kind of thing where I come from.']`,
    txt: `
[' dawnbreaker_4', ' There are rules about that kind of thing where I come from.'] -ch 300
`
  },
  {
    label: `[' dawnbreaker_5', " For how short your lives are, you've done quite well."]`,
    txt: `
[' dawnbreaker_5', " For how short your lives are, you've done quite well."] -ch 301
`
  },
  {
    label: `[' dazzle_laugh', 'Ha ha har ha ha ha!']`,
    txt: `
[' dazzle_laugh', 'Ha ha har ha ha ha!'] -ch 286
`
  },
  {
    label: `[' dazzle_thank', 'Oh, what a beauty!']`,
    txt: `
[' dazzle_thank', 'Oh, what a beauty!'] -ch 287
`
  },
  {
    label: `[' dazzle_deny', "That's not right."]`,
    txt: `
[' dazzle_deny', "That's not right."] -ch 288
`
  },
  {
    label: `[' dazzle_1', 'A dazzling death.']`,
    txt: `
[' dazzle_1', 'A dazzling death.'] -ch 289
`
  },
  {
    label: `[' dazzle_2', 'Charitable of you.']`,
    txt: `
[' dazzle_2', 'Charitable of you.'] -ch 290
`
  },
  {
    label: `[' dazzle_3', 'Jzap!']`,
    txt: `
[' dazzle_3', 'Jzap!'] -ch 291
`
  },
  {
    label: `[' dazzle_4', 'Tricked you.']`,
    txt: `
[' dazzle_4', 'Tricked you.'] -ch 292
`
  },
  {
    label: `[' dazzle_5', 'That was almost a disaster.']`,
    txt: `
[' dazzle_5', 'That was almost a disaster.'] -ch 293
`
  },
  {
    label: `[' death_prophet_laugh', 'Oh ah ha ha ha ha ha ho ho haa! Ha ha ha ha ha ha!']`,
    txt: `
[' death_prophet_laugh', 'Oh ah ha ha ha ha ha ho ho haa! Ha ha ha ha ha ha!'] -ch 302
`
  },
  {
    label: `[' death_prophet_thank', 'Well done, my beauties!']`,
    txt: `
[' death_prophet_thank', 'Well done, my beauties!'] -ch 303
`
  },
  {
    label: `[' death_prophet_deny', 'Not meant to be.']`,
    txt: `
[' death_prophet_deny', 'Not meant to be.'] -ch 304
`
  },
  {
    label: `[' death_prophet_1', 'Poor dear.']`,
    txt: `
[' death_prophet_1', 'Poor dear.'] -ch 305
`
  },
  {
    label: `[' death_prophet_2', 'How disappointing.']`,
    txt: `
[' death_prophet_2', 'How disappointing.'] -ch 306
`
  },
  {
    label: `[' death_prophet_3', 'Come back to me! Come back to me!']`,
    txt: `
[' death_prophet_3', 'Come back to me! Come back to me!'] -ch 307
`
  },
  {
    label: `[' death_prophet_4', 'It did not take a prophet to see that coming.']`,
    txt: `
[' death_prophet_4', 'It did not take a prophet to see that coming.'] -ch 308
`
  },
  {
    label: `[' death_prophet_5', 'I died a little just now.']`,
    txt: `
[' death_prophet_5', 'I died a little just now.'] -ch 309
`
  },
  {
    label: `[' disruptor_laugh', 'Heheha.']`,
    txt: `
[' disruptor_laugh', 'Heheha.'] -ch 310
`
  },
  {
    label: `[' disruptor_thank', "Now that's more like it."]`,
    txt: `
[' disruptor_thank', "Now that's more like it."] -ch 311
`
  },
  {
    label: `[' disruptor_deny', "I'm ecstatic!"]`,
    txt: `
[' disruptor_deny', "I'm ecstatic!"] -ch 312
`
  },
  {
    label: `[' disruptor_1', 'What weathermancery is this?']`,
    txt: `
[' disruptor_1', 'What weathermancery is this?'] -ch 313
`
  },
  {
    label: `[' disruptor_2', "You've been disrupted."]`,
    txt: `
[' disruptor_2', "You've been disrupted."] -ch 314
`
  },
  {
    label: `[' disruptor_3', "They're trying to kill me."]`,
    txt: `
[' disruptor_3', "They're trying to kill me."] -ch 315
`
  },
  {
    label: `[' disruptor_4', 'I call down the thunder.']`,
    txt: `
[' disruptor_4', 'I call down the thunder.'] -ch 316
`
  },
  {
    label: `[' disruptor_5', 'Well, look at that.']`,
    txt: `
[' disruptor_5', 'Well, look at that.'] -ch 317
`
  },
  {
    label: `[' doom_bringer_laugh', 'Heheh heh hah heh hah hah hah.']`,
    txt: `
[' doom_bringer_laugh', 'Heheh heh hah heh hah hah hah.'] -ch 318
`
  },
  {
    label: `[' doom_bringer_thank', 'Oh, yes.']`,
    txt: `
[' doom_bringer_thank', 'Oh, yes.'] -ch 319
`
  },
  {
    label: `[' doom_bringer_deny', 'I gambled, you lost.']`,
    txt: `
[' doom_bringer_deny', 'I gambled, you lost.'] -ch 320
`
  },
  {
    label: `[' doom_bringer_1', "He he heh heh he, handsome devil, aren't I?"]`,
    txt: `
[' doom_bringer_1', "He he heh heh he, handsome devil, aren't I?"] -ch 321
`
  },
  {
    label: `[' doom_bringer_2', "Well, hell's bells."]`,
    txt: `
[' doom_bringer_2', "Well, hell's bells."] -ch 322
`
  },
  {
    label: `[' doom_bringer_3', 'Oh, crap.']`,
    txt: `
[' doom_bringer_3', 'Oh, crap.'] -ch 323
`
  },
  {
    label: `[' doom_bringer_4', 'Hemmehm, you were lucky this time.']`,
    txt: `
[' doom_bringer_4', 'Hemmehm, you were lucky this time.'] -ch 324
`
  },
  {
    label: `[' doom_bringer_5', "All hell's broken loose."]`,
    txt: `
[' doom_bringer_5', "All hell's broken loose."] -ch 325
`
  },
  {
    label: `[' dragon_knight_laugh', 'Tehh, heh he huh heh heh huh.']`,
    txt: `
[' dragon_knight_laugh', 'Tehh, heh he huh heh heh huh.'] -ch 326
`
  },
  {
    label: `[' dragon_knight_thank', 'In strength is victory.']`,
    txt: `
[' dragon_knight_thank', 'In strength is victory.'] -ch 327
`
  },
  {
    label: `[' dragon_knight_deny', "Just what I've been waiting for."]`,
    txt: `
[' dragon_knight_deny', "Just what I've been waiting for."] -ch 328
`
  },
  {
    label: `[' dragon_knight_1', 'You fought and died with honor.']`,
    txt: `
[' dragon_knight_1', 'You fought and died with honor.'] -ch 329
`
  },
  {
    label: `[' dragon_knight_2', "I'll take that."]`,
    txt: `
[' dragon_knight_2', "I'll take that."] -ch 330
`
  },
  {
    label: `[' dragon_knight_3', 'Live by the sword, die by the dragon.']`,
    txt: `
[' dragon_knight_3', 'Live by the sword, die by the dragon.'] -ch 331
`
  },
  {
    label: `[' dragon_knight_4', 'Of course.']`,
    txt: `
[' dragon_knight_4', 'Of course.'] -ch 332
`
  },
  {
    label: `[' dragon_knight_5', 'Face the knight, face the dragon.']`,
    txt: `
[' dragon_knight_5', 'Face the knight, face the dragon.'] -ch 333
`
  },
  {
    label: `[' drow_ranger_laugh', 'Ah ha ha ha ha ha ha ha ha ha ha ha ha ha!']`,
    txt: `
[' drow_ranger_laugh', 'Ah ha ha ha ha ha ha ha ha ha ha ha ha ha!'] -ch 334
`
  },
  {
    label: `[' drow_ranger_thank', 'Another triumph!']`,
    txt: `
[' drow_ranger_thank', 'Another triumph!'] -ch 335
`
  },
  {
    label: `[' drow_ranger_deny', "You'll have to do better than that!"]`,
    txt: `
[' drow_ranger_deny', "You'll have to do better than that!"] -ch 336
`
  },
  {
    label: `[' drow_ranger_1', 'You were too noisy to live.']`,
    txt: `
[' drow_ranger_1', 'You were too noisy to live.'] -ch 337
`
  },
  {
    label: `[' drow_ranger_2', 'Amateur.']`,
    txt: `
[' drow_ranger_2', 'Amateur.'] -ch 338
`
  },
  {
    label: `[' drow_ranger_3', 'You die alone.']`,
    txt: `
[' drow_ranger_3', 'You die alone.'] -ch 339
`
  },
  {
    label: `[' drow_ranger_4', "This couldn't have ended any other way."]`,
    txt: `
[' drow_ranger_4', "This couldn't have ended any other way."] -ch 340
`
  },
  {
    label: `[' drow_ranger_5', "Now that you're dead, I find it easy to respect you."]`,
    txt: `
[' drow_ranger_5', "Now that you're dead, I find it easy to respect you."] -ch 341
`
  },
  {
    label: `[' earth_spirit_laugh', 'Oh ho ho ha ha ha ha ha ha!']`,
    txt: `
[' earth_spirit_laugh', 'Oh ho ho ha ha ha ha ha ha!'] -ch 342
`
  },
  {
    label: `[' earth_spirit_thank', 'You rock.']`,
    txt: `
[' earth_spirit_thank', 'You rock.'] -ch 343
`
  },
  {
    label: `[' earth_spirit_deny', 'Yes, I just did that.']`,
    txt: `
[' earth_spirit_deny', 'Yes, I just did that.'] -ch 344
`
  },
  {
    label: `[' earth_spirit_1', 'What?']`,
    txt: `
[' earth_spirit_1', 'What?'] -ch 345
`
  },
  {
    label: `[' earth_spirit_2', 'Where did I go?']`,
    txt: `
[' earth_spirit_2', 'Where did I go?'] -ch 346
`
  },
  {
    label: `[' earth_spirit_3', 'Perfect timing.']`,
    txt: `
[' earth_spirit_3', 'Perfect timing.'] -ch 347
`
  },
  {
    label: `[' earth_spirit_4', 'Really? Really?']`,
    txt: `
[' earth_spirit_4', 'Really? Really?'] -ch 348
`
  },
  {
    label: `[' earth_spirit_5', 'Who dares face me now.']`,
    txt: `
[' earth_spirit_5', 'Who dares face me now.'] -ch 349
`
  },
  {
    label: `[' earthshaker_laugh', 'Ha ha ha ha ha ha ha ha ha.']`,
    txt: `
[' earthshaker_laugh', 'Ha ha ha ha ha ha ha ha ha.'] -ch 350
`
  },
  {
    label: `[' earthshaker_thank', "Let's shake things up!"]`,
    txt: `
[' earthshaker_thank', "Let's shake things up!"] -ch 351
`
  },
  {
    label: `[' earthshaker_deny', 'Shocking...']`,
    txt: `
[' earthshaker_deny', 'Shocking...'] -ch 352
`
  },
  {
    label: `[' earthshaker_1', 'It was your own damn fault.']`,
    txt: `
[' earthshaker_1', 'It was your own damn fault.'] -ch 353
`
  },
  {
    label: `[' earthshaker_2', 'Whoa... Aftershocks...']`,
    txt: `
[' earthshaker_2', 'Whoa... Aftershocks...'] -ch 354
`
  },
  {
    label: `[' earthshaker_3', "Slammin'...?"]`,
    txt: `
[' earthshaker_3', "Slammin'...?"] -ch 355
`
  },
  {
    label: `[' earthshaker_4', 'It was getting far too crowded.']`,
    txt: `
[' earthshaker_4', 'It was getting far too crowded.'] -ch 356
`
  },
  {
    label: `[' earthshaker_5', "There may be many earths, but there's only one Earthshaker."]`,
    txt: `
[' earthshaker_5', "There may be many earths, but there's only one Earthshaker."] -ch 357
`
  },
  {
    label: `[' elder_titan_laugh', 'Eh ha ha ha ha ha.']`,
    txt: `
[' elder_titan_laugh', 'Eh ha ha ha ha ha.'] -ch 358
`
  },
  {
    label: `[' elder_titan_thank', 'Now shall the battle turn.']`,
    txt: `
[' elder_titan_thank', 'Now shall the battle turn.'] -ch 359
`
  },
  {
    label: `[' elder_titan_deny', 'The Titan says no.']`,
    txt: `
[' elder_titan_deny', 'The Titan says no.'] -ch 360
`
  },
  {
    label: `[' elder_titan_1', 'Get off my lawn!']`,
    txt: `
[' elder_titan_1', 'Get off my lawn!'] -ch 361
`
  },
  {
    label: `[' elder_titan_2', 'What have I done now?']`,
    txt: `
[' elder_titan_2', 'What have I done now?'] -ch 362
`
  },
  {
    label: `[' elder_titan_3', 'This bodes well.']`,
    txt: `
[' elder_titan_3', 'This bodes well.'] -ch 363
`
  },
  {
    label: `[' elder_titan_4', 'A pitiable attempt.']`,
    txt: `
[' elder_titan_4', 'A pitiable attempt.'] -ch 364
`
  },
  {
    label: `[' elder_titan_5', 'You must learn respect for your elders.']`,
    txt: `
[' elder_titan_5', 'You must learn respect for your elders.'] -ch 365
`
  },
  {
    label: `[' ember_spirit_laugh', 'Eh he he he he he!']`,
    txt: `
[' ember_spirit_laugh', 'Eh he he he he he!'] -ch 366
`
  },
  {
    label: `[' ember_spirit_thank', 'A flash of inspiration!']`,
    txt: `
[' ember_spirit_thank', 'A flash of inspiration!'] -ch 367
`
  },
  {
    label: `[' ember_spirit_deny', 'This reward transcends expectation!']`,
    txt: `
[' ember_spirit_deny', 'This reward transcends expectation!'] -ch 368
`
  },
  {
    label: `[' ember_spirit_1', 'Prepare for a lesson.']`,
    txt: `
[' ember_spirit_1', 'Prepare for a lesson.'] -ch 369
`
  },
  {
    label: `[' ember_spirit_2', 'What did you learn?']`,
    txt: `
[' ember_spirit_2', 'What did you learn?'] -ch 370
`
  },
  {
    label: `[' ember_spirit_3', 'Balance in all things.']`,
    txt: `
[' ember_spirit_3', 'Balance in all things.'] -ch 371
`
  },
  {
    label: `[' ember_spirit_4', 'Through anger lies failure.']`,
    txt: `
[' ember_spirit_4', 'Through anger lies failure.'] -ch 372
`
  },
  {
    label: `[' ember_spirit_5', 'Even a master falters.']`,
    txt: `
[' ember_spirit_5', 'Even a master falters.'] -ch 373
`
  },
  {
    label: `[' enchantress_laugh', 'Ha ha ha ha ha ha ha!']`,
    txt: `
[' enchantress_laugh', 'Ha ha ha ha ha ha ha!'] -ch 374
`
  },
  {
    label: `[' enchantress_thank', 'I love winning!']`,
    txt: `
[' enchantress_thank', 'I love winning!'] -ch 375
`
  },
  {
    label: `[' enchantress_deny', "Don't be mad."]`,
    txt: `
[' enchantress_deny', "Don't be mad."] -ch 376
`
  },
  {
    label: `[' enchantress_1', "It's just not fair."]`,
    txt: `
[' enchantress_1', "It's just not fair."] -ch 377
`
  },
  {
    label: `[' enchantress_2', 'Hilarious.']`,
    txt: `
[' enchantress_2', 'Hilarious.'] -ch 378
`
  },
  {
    label: `[' enchantress_3', 'You did your best.']`,
    txt: `
[' enchantress_3', 'You did your best.'] -ch 379
`
  },
  {
    label: `[' enchantress_4', 'Sproink.']`,
    txt: `
[' enchantress_4', 'Sproink.'] -ch 380
`
  },
  {
    label: `[' enchantress_5', 'You know what I love? Everything!']`,
    txt: `
[' enchantress_5', 'You know what I love? Everything!'] -ch 381
`
  },
  {
    label: `[' enigma_laugh', 'He-he-huh-heh-heh.']`,
    txt: `
[' enigma_laugh', 'He-he-huh-heh-heh.'] -ch 382
`
  },
  {
    label: `[' enigma_thank', 'Well, this is a paradox.']`,
    txt: `
[' enigma_thank', 'Well, this is a paradox.'] -ch 383
`
  },
  {
    label: `[' enigma_deny', 'An astronomical price.']`,
    txt: `
[' enigma_deny', 'An astronomical price.'] -ch 384
`
  },
  {
    label: `[' enigma_1', 'Stare into the abyss.']`,
    txt: `
[' enigma_1', 'Stare into the abyss.'] -ch 385
`
  },
  {
    label: `[' enigma_2', 'Silence is golden.']`,
    txt: `
[' enigma_2', 'Silence is golden.'] -ch 386
`
  },
  {
    label: `[' enigma_3', 'You are beneath me.']`,
    txt: `
[' enigma_3', 'You are beneath me.'] -ch 387
`
  },
  {
    label: `[' enigma_4', 'A welcome manifestation of randomness.']`,
    txt: `
[' enigma_4', 'A welcome manifestation of randomness.'] -ch 388
`
  },
  {
    label: `[' enigma_5', 'If light cannot escape me, what hope have you?']`,
    txt: `
[' enigma_5', 'If light cannot escape me, what hope have you?'] -ch 389
`
  },
  {
    label: `[' faceless_void_laugh', 'Heh heh hah ha hah heh heah heh.']`,
    txt: `
[' faceless_void_laugh', 'Heh heh hah ha hah heh heah heh.'] -ch 390
`
  },
  {
    label: `[' faceless_void_thank', 'Just as I envisaged!']`,
    txt: `
[' faceless_void_thank', 'Just as I envisaged!'] -ch 391
`
  },
  {
    label: `[' faceless_void_deny', 'Some things were just not meant to be.']`,
    txt: `
[' faceless_void_deny', 'Some things were just not meant to be.'] -ch 392
`
  },
  {
    label: `[' faceless_void_1', 'You lose face and life.']`,
    txt: `
[' faceless_void_1', 'You lose face and life.'] -ch 393
`
  },
  {
    label: `[' faceless_void_2', "You've been voided."]`,
    txt: `
[' faceless_void_2', "You've been voided."] -ch 394
`
  },
  {
    label: `[' faceless_void_3', "I can't bear to look."]`,
    txt: `
[' faceless_void_3', "I can't bear to look."] -ch 395
`
  },
  {
    label: `[' faceless_void_4', "I may be faceless, but I'm not maceless."]`,
    txt: `
[' faceless_void_4', "I may be faceless, but I'm not maceless."] -ch 396
`
  },
  {
    label: `[' faceless_void_5', 'An eternity of embarrassment!']`,
    txt: `
[' faceless_void_5', 'An eternity of embarrassment!'] -ch 397
`
  },
  {
    label: `[' furion_laugh', 'Ma ha ha ha ha ha ha ha ha ha!']`,
    txt: `
[' furion_laugh', 'Ma ha ha ha ha ha ha ha ha ha!'] -ch 622
`
  },
  {
    label: `[' furion_thank', 'Admirable.']`,
    txt: `
[' furion_thank', 'Admirable.'] -ch 623
`
  },
  {
    label: `[' furion_deny', 'Hmhmhm. Well, well.']`,
    txt: `
[' furion_deny', 'Hmhmhm. Well, well.'] -ch 624
`
  },
  {
    label: `[' furion_1', 'Feed the trees.']`,
    txt: `
[' furion_1', 'Feed the trees.'] -ch 625
`
  },
  {
    label: `[' furion_2', "I'll tear you limb from limb."]`,
    txt: `
[' furion_2', "I'll tear you limb from limb."] -ch 626
`
  },
  {
    label: `[' furion_3', 'Very nice.']`,
    txt: `
[' furion_3', 'Very nice.'] -ch 627
`
  },
  {
    label: `[' furion_4', 'Aww, too bad.']`,
    txt: `
[' furion_4', 'Aww, too bad.'] -ch 628
`
  },
  {
    label: `[' furion_5', 'New life will make its home amongst your bones.']`,
    txt: `
[' furion_5', 'New life will make its home amongst your bones.'] -ch 629
`
  },
  {
    label: `[' grimstroke_laugh', 'Huh huh ha ha ha ha ha ha ha haaa!']`,
    txt: `
[' grimstroke_laugh', 'Huh huh ha ha ha ha ha ha ha haaa!'] -ch 398
`
  },
  {
    label: `[' grimstroke_thank', 'Oh, that is too good!']`,
    txt: `
[' grimstroke_thank', 'Oh, that is too good!'] -ch 399
`
  },
  {
    label: `[' grimstroke_deny', 'You die, yet your failure lives on...']`,
    txt: `
[' grimstroke_deny', 'You die, yet your failure lives on...'] -ch 400
`
  },
  {
    label: `[' grimstroke_1', 'You should have known better...']`,
    txt: `
[' grimstroke_1', 'You should have known better...'] -ch 401
`
  },
  {
    label: `[' grimstroke_2', 'These wretched fools have no idea...']`,
    txt: `
[' grimstroke_2', 'These wretched fools have no idea...'] -ch 402
`
  },
  {
    label: `[' grimstroke_3', 'Know your place.']`,
    txt: `
[' grimstroke_3', 'Know your place.'] -ch 403
`
  },
  {
    label: `[' grimstroke_4', "You've a mind like a child!"]`,
    txt: `
[' grimstroke_4', "You've a mind like a child!"] -ch 404
`
  },
  {
    label: `[' grimstroke_5', 'Watch the master at work.']`,
    txt: `
[' grimstroke_5', 'Watch the master at work.'] -ch 405
`
  },
  {
    label: `[' gyrocopter_laugh', 'Ah ha! Wah haha ha ha! Ah ha hhuh.']`,
    txt: `
[' gyrocopter_laugh', 'Ah ha! Wah haha ha ha! Ah ha hhuh.'] -ch 406
`
  },
  {
    label: `[' gyrocopter_thank', 'Something for everybody!']`,
    txt: `
[' gyrocopter_thank', 'Something for everybody!'] -ch 407
`
  },
  {
    label: `[' gyrocopter_deny', 'Aaah phooey.']`,
    txt: `
[' gyrocopter_deny', 'Aaah phooey.'] -ch 408
`
  },
  {
    label: `[' gyrocopter_1', 'Lucky!']`,
    txt: `
[' gyrocopter_1', 'Lucky!'] -ch 409
`
  },
  {
    label: `[' gyrocopter_2', "I'm getting too old for this horse shit."]`,
    txt: `
[' gyrocopter_2', "I'm getting too old for this horse shit."] -ch 410
`
  },
  {
    label: `[' gyrocopter_3', 'Get off my lawn!']`,
    txt: `
[' gyrocopter_3', 'Get off my lawn!'] -ch 411
`
  },
  {
    label: `[' gyrocopter_4', "That'll learn ya!"]`,
    txt: `
[' gyrocopter_4', "That'll learn ya!"] -ch 412
`
  },
  {
    label: `[' gyrocopter_5', 'I belong in the sky, and you belong in the ground.']`,
    txt: `
[' gyrocopter_5', 'I belong in the sky, and you belong in the ground.'] -ch 413
`
  },
  {
    label: `[' hoodwink_laugh', '', '', 'Ha eh eh he he!']`,
    txt: `
[' hoodwink_laugh', '', '', 'Ha eh eh he he!'] -ch 414
`
  },
  {
    label: `[' hoodwink_thank', '', '', 'Proper skux.']`,
    txt: `
[' hoodwink_thank', '', '', 'Proper skux.'] -ch 415
`
  },
  {
    label: `[' hoodwink_deny', '', '', "Yeah, nah. Let's not."]`,
    txt: `
[' hoodwink_deny', '', '', "Yeah, nah. Let's not."] -ch 416
`
  },
  {
    label: `[' hoodwink_1', '', '', ' Caught ya!']`,
    txt: `
[' hoodwink_1', '', '', ' Caught ya!'] -ch 417
`
  },
  {
    label: `[' hoodwink_2', '', '', ' Did you fall out of the nest as a baby?']`,
    txt: `
[' hoodwink_2', '', '', ' Did you fall out of the nest as a baby?'] -ch 418
`
  },
  {
    label: `[' hoodwink_3', '', '', ' Starting to feel a bit nutty.']`,
    txt: `
[' hoodwink_3', '', '', ' Starting to feel a bit nutty.'] -ch 419
`
  },
  {
    label: `[' hoodwink_4', '', '', ' Time to die!']`,
    txt: `
[' hoodwink_4', '', '', ' Time to die!'] -ch 420
`
  },
  {
    label: `[' hoodwink_5', '', '', ' Sleep tight, little guy.']`,
    txt: `
[' hoodwink_5', '', '', ' Sleep tight, little guy.'] -ch 421
`
  },
  {
    label: `[' huskar_laugh', 'Heh heh heeh.']`,
    txt: `
[' huskar_laugh', 'Heh heh heeh.'] -ch 422
`
  },
  {
    label: `[' huskar_thank', 'Ahh, this will please the gods.']`,
    txt: `
[' huskar_thank', 'Ahh, this will please the gods.'] -ch 423
`
  },
  {
    label: `[' huskar_deny', 'Well worth it.']`,
    txt: `
[' huskar_deny', 'Well worth it.'] -ch 424
`
  },
  {
    label: `[' huskar_1', 'Another life squandered.']`,
    txt: `
[' huskar_1', 'Another life squandered.'] -ch 425
`
  },
  {
    label: `[' huskar_2', 'A fair trade!']`,
    txt: `
[' huskar_2', 'A fair trade!'] -ch 426
`
  },
  {
    label: `[' huskar_3', 'My life now has meaning!']`,
    txt: `
[' huskar_3', 'My life now has meaning!'] -ch 427
`
  },
  {
    label: `[' huskar_4', 'Is that all?']`,
    txt: `
[' huskar_4', 'Is that all?'] -ch 428
`
  },
  {
    label: `[' huskar_5', 'You gave all you could give but it was not enough.']`,
    txt: `
[' huskar_5', 'You gave all you could give but it was not enough.'] -ch 429
`
  },
  {
    label: `[' invoker_laugh', 'Ha ha ha ha ha ha ha ha ha ha!']`,
    txt: `
[' invoker_laugh', 'Ha ha ha ha ha ha ha ha ha ha!'] -ch 430
`
  },
  {
    label: `[' invoker_thank', 'I will commit this to memory.']`,
    txt: `
[' invoker_thank', 'I will commit this to memory.'] -ch 431
`
  },
  {
    label: `[' invoker_deny', 'One of my favorites.']`,
    txt: `
[' invoker_deny', 'One of my favorites.'] -ch 432
`
  },
  {
    label: `[' invoker_1', 'Did I hear a squeak?']`,
    txt: `
[' invoker_1', 'Did I hear a squeak?'] -ch 433
`
  },
  {
    label: `[' invoker_2', 'Fight me!']`,
    txt: `
[' invoker_2', 'Fight me!'] -ch 434
`
  },
  {
    label: `[' invoker_3', 'Did I mix my magics?']`,
    txt: `
[' invoker_3', 'Did I mix my magics?'] -ch 435
`
  },
  {
    label: `[' invoker_4', 'Profitable engagement.']`,
    txt: `
[' invoker_4', 'Profitable engagement.'] -ch 436
`
  },
  {
    label: `[' invoker_5', 'Throughout the aeons I have been known by many names...but my true name of power...is Carl.']`,
    txt: `
[' invoker_5', 'Throughout the aeons I have been known by many names...but my true name of power...is Carl.'] -ch 437
`
  },
  {
    label: `[' jakiro_laugh', 'Ha ha ha ha ha ha ha ha ha ha ha!']`,
    txt: `
[' jakiro_laugh', 'Ha ha ha ha ha ha ha ha ha ha ha!'] -ch 446
`
  },
  {
    label: `[' jakiro_thank', 'Cheers.']`,
    txt: `
[' jakiro_thank', 'Cheers.'] -ch 447
`
  },
  {
    label: `[' jakiro_deny', 'This changes everything.']`,
    txt: `
[' jakiro_deny', 'This changes everything.'] -ch 448
`
  },
  {
    label: `[' jakiro_1', 'Burninated.']`,
    txt: `
[' jakiro_1', 'Burninated.'] -ch 449
`
  },
  {
    label: `[' jakiro_2', "Now we're talking."]`,
    txt: `
[' jakiro_2', "Now we're talking."] -ch 450
`
  },
  {
    label: `[' jakiro_3', "We'll see about that."]`,
    txt: `
[' jakiro_3', "We'll see about that."] -ch 451
`
  },
  {
    label: `[' jakiro_4', 'We are not amused.']`,
    txt: `
[' jakiro_4', 'We are not amused.'] -ch 452
`
  },
  {
    label: `[' jakiro_5', 'That was cold blooded.']`,
    txt: `
[' jakiro_5', 'That was cold blooded.'] -ch 453
`
  },
  {
    label: `[' juggernaut_laugh', 'Ha ha ha ha ha!']`,
    txt: `
[' juggernaut_laugh', 'Ha ha ha ha ha!'] -ch 454
`
  },
  {
    label: `[' juggernaut_thank', "Oh that's nice."]`,
    txt: `
[' juggernaut_thank', "Oh that's nice."] -ch 455
`
  },
  {
    label: `[' juggernaut_deny', 'Hm, looking good.']`,
    txt: `
[' juggernaut_deny', 'Hm, looking good.'] -ch 456
`
  },
  {
    label: `[' juggernaut_1', 'You will be forever alone.']`,
    txt: `
[' juggernaut_1', 'You will be forever alone.'] -ch 457
`
  },
  {
    label: `[' juggernaut_2', "It's all falling into place."]`,
    txt: `
[' juggernaut_2', "It's all falling into place."] -ch 458
`
  },
  {
    label: `[' juggernaut_3', "I'll be back to finish this later."]`,
    txt: `
[' juggernaut_3', "I'll be back to finish this later."] -ch 459
`
  },
  {
    label: `[' juggernaut_4', "There's a fine line between bravery and stupidity."]`,
    txt: `
[' juggernaut_4', "There's a fine line between bravery and stupidity."] -ch 460
`
  },
  {
    label: `[' juggernaut_5', 'Mm, snazzy.']`,
    txt: `
[' juggernaut_5', 'Mm, snazzy.'] -ch 461
`
  },
  {
    label: `[' keeper_of_the_light_laugh', 'Eh hee hee hee hee hee.']`,
    txt: `
[' keeper_of_the_light_laugh', 'Eh hee hee hee hee hee.'] -ch 462
`
  },
  {
    label: `[' keeper_of_the_light_thank', 'May the light keep you.']`,
    txt: `
[' keeper_of_the_light_thank', 'May the light keep you.'] -ch 463
`
  },
  {
    label: `[' keeper_of_the_light_deny', 'No mana.']`,
    txt: `
[' keeper_of_the_light_deny', 'No mana.'] -ch 464
`
  },
  {
    label: `[' keeper_of_the_light_1', 'Really now, you should have seen that coming.']`,
    txt: `
[' keeper_of_the_light_1', 'Really now, you should have seen that coming.'] -ch 465
`
  },
  {
    label: `[' keeper_of_the_light_2', "Get off my lawn...eh, what's a lawn?"]`,
    txt: `
[' keeper_of_the_light_2', "Get off my lawn...eh, what's a lawn?"] -ch 466
`
  },
  {
    label: `[' keeper_of_the_light_3', 'My horse says nay and so do I.']`,
    txt: `
[' keeper_of_the_light_3', 'My horse says nay and so do I.'] -ch 467
`
  },
  {
    label: `[' keeper_of_the_light_4', 'Lights out for you.']`,
    txt: `
[' keeper_of_the_light_4', 'Lights out for you.'] -ch 468
`
  },
  {
    label: `[' keeper_of_the_light_5', 'Do not fear the light - fear me!']`,
    txt: `
[' keeper_of_the_light_5', 'Do not fear the light - fear me!'] -ch 469
`
  },
  {
    label: `[' kunkka_laugh', 'He-hu-hu-hu-hu-huhhuha!']`,
    txt: `
[' kunkka_laugh', 'He-hu-hu-hu-hu-huhhuha!'] -ch 470
`
  },
  {
    label: `[' kunkka_thank', "You're a trusty mate!"]`,
    txt: `
[' kunkka_thank', "You're a trusty mate!"] -ch 471
`
  },
  {
    label: `[' kunkka_deny', 'Straight to the bottom with ya!']`,
    txt: `
[' kunkka_deny', 'Straight to the bottom with ya!'] -ch 472
`
  },
  {
    label: `[' kunkka_1', "You don't have the sand."]`,
    txt: `
[' kunkka_1', "You don't have the sand."] -ch 473
`
  },
  {
    label: `[' kunkka_2', 'Heh! Man overboard!']`,
    txt: `
[' kunkka_2', 'Heh! Man overboard!'] -ch 474
`
  },
  {
    label: `[' kunkka_3', "You're all washed up!"]`,
    txt: `
[' kunkka_3', "You're all washed up!"] -ch 475
`
  },
  {
    label: `[' kunkka_4', "Just to be clear, if I call you mate, I don't mean it literally."]`,
    txt: `
[' kunkka_4', "Just to be clear, if I call you mate, I don't mean it literally."] -ch 476
`
  },
  {
    label: `[' kunkka_5', 'You set sail for fail.']`,
    txt: `
[' kunkka_5', 'You set sail for fail.'] -ch 477
`
  },
  {
    label: `[' legion_commander_laugh', 'Ah ha ha ha ha ha ha!']`,
    txt: `
[' legion_commander_laugh', 'Ah ha ha ha ha ha ha!'] -ch 478
`
  },
  {
    label: `[' legion_commander_thank', 'Not bad at all!']`,
    txt: `
[' legion_commander_thank', 'Not bad at all!'] -ch 479
`
  },
  {
    label: `[' legion_commander_deny', 'Try harder.']`,
    txt: `
[' legion_commander_deny', 'Try harder.'] -ch 480
`
  },
  {
    label: `[' legion_commander_1', 'Sound strategy.']`,
    txt: `
[' legion_commander_1', 'Sound strategy.'] -ch 481
`
  },
  {
    label: `[' legion_commander_2', 'Nice mustache.']`,
    txt: `
[' legion_commander_2', 'Nice mustache.'] -ch 482
`
  },
  {
    label: `[' legion_commander_3', 'I will tear you apart!']`,
    txt: `
[' legion_commander_3', 'I will tear you apart!'] -ch 483
`
  },
  {
    label: `[' legion_commander_4', 'Son of a...!']`,
    txt: `
[' legion_commander_4', 'Son of a...!'] -ch 484
`
  },
  {
    label: `[' legion_commander_5', 'That escalated quickly!']`,
    txt: `
[' legion_commander_5', 'That escalated quickly!'] -ch 485
`
  },
  {
    label: `[' leshrac_laugh', 'Ha ha ha ha ha ha ha!']`,
    txt: `
[' leshrac_laugh', 'Ha ha ha ha ha ha ha!'] -ch 486
`
  },
  {
    label: `[' leshrac_thank', 'To a future of grief.']`,
    txt: `
[' leshrac_thank', 'To a future of grief.'] -ch 487
`
  },
  {
    label: `[' leshrac_deny', 'Have a little humility.']`,
    txt: `
[' leshrac_deny', 'Have a little humility.'] -ch 488
`
  },
  {
    label: `[' leshrac_1', 'Two legged abomination.']`,
    txt: `
[' leshrac_1', 'Two legged abomination.'] -ch 489
`
  },
  {
    label: `[' leshrac_2', "I'll take that."]`,
    txt: `
[' leshrac_2', "I'll take that."] -ch 490
`
  },
  {
    label: `[' leshrac_3', 'Ah, all in service to imbalance.']`,
    txt: `
[' leshrac_3', 'Ah, all in service to imbalance.'] -ch 491
`
  },
  {
    label: `[' leshrac_4', 'A foregone conclusion.']`,
    txt: `
[' leshrac_4', 'A foregone conclusion.'] -ch 492
`
  },
  {
    label: `[' leshrac_5', 'A thousand of your kind have fallen before me.']`,
    txt: `
[' leshrac_5', 'A thousand of your kind have fallen before me.'] -ch 493
`
  },
  {
    label: `[' lich_laugh', 'Ha ha ha ha ha ha ha ha!']`,
    txt: `
[' lich_laugh', 'Ha ha ha ha ha ha ha ha!'] -ch 494
`
  },
  {
    label: `[' lich_thank', 'Stay frosty!']`,
    txt: `
[' lich_thank', 'Stay frosty!'] -ch 495
`
  },
  {
    label: `[' lich_deny', "Watch your step, it's six feet down."]`,
    txt: `
[' lich_deny', "Watch your step, it's six feet down."] -ch 496
`
  },
  {
    label: `[' lich_1', "Can't kill the dead."]`,
    txt: `
[' lich_1', "Can't kill the dead."] -ch 497
`
  },
  {
    label: `[' lich_2', 'Does it tingle?']`,
    txt: `
[' lich_2', 'Does it tingle?'] -ch 498
`
  },
  {
    label: `[' lich_3', 'Feel my cold embrace!']`,
    txt: `
[' lich_3', 'Feel my cold embrace!'] -ch 499
`
  },
  {
    label: `[' lich_4', "Who's the number one now?"]`,
    txt: `
[' lich_4', "Who's the number one now?"] -ch 500
`
  },
  {
    label: `[' lich_5', 'Ah, Ice Frog!']`,
    txt: `
[' lich_5', 'Ah, Ice Frog!'] -ch 501
`
  },
  {
    label: `[' life_stealer_laugh', 'Ha! Ha ha ha ha!']`,
    txt: `
[' life_stealer_laugh', 'Ha! Ha ha ha ha!'] -ch 502
`
  },
  {
    label: `[' life_stealer_thank', 'This pleases the Master.']`,
    txt: `
[' life_stealer_thank', 'This pleases the Master.'] -ch 503
`
  },
  {
    label: `[' life_stealer_deny', 'Surprise!']`,
    txt: `
[' life_stealer_deny', 'Surprise!'] -ch 504
`
  },
  {
    label: `[' life_stealer_1', 'The master is here!']`,
    txt: `
[' life_stealer_1', 'The master is here!'] -ch 505
`
  },
  {
    label: `[' life_stealer_2', 'Alone with my rage!']`,
    txt: `
[' life_stealer_2', 'Alone with my rage!'] -ch 506
`
  },
  {
    label: `[' life_stealer_3', 'Sweet, sweet violence.']`,
    txt: `
[' life_stealer_3', 'Sweet, sweet violence.'] -ch 507
`
  },
  {
    label: `[' life_stealer_4', 'You feel the red hand of death.']`,
    txt: `
[' life_stealer_4', 'You feel the red hand of death.'] -ch 508
`
  },
  {
    label: `[' life_stealer_5', 'Ta-da!']`,
    txt: `
[' life_stealer_5', 'Ta-da!'] -ch 509
`
  },
  {
    label: `[' lina_laugh', 'Ha ha ha ha ha ha ha!']`,
    txt: `
[' lina_laugh', 'Ha ha ha ha ha ha ha!'] -ch 510
`
  },
  {
    label: `[' lina_thank', 'That was hot!']`,
    txt: `
[' lina_thank', 'That was hot!'] -ch 511
`
  },
  {
    label: `[' lina_deny', "Burns, doesn't it?"]`,
    txt: `
[' lina_deny', "Burns, doesn't it?"] -ch 512
`
  },
  {
    label: `[' lina_1', "That wasn't too bright."]`,
    txt: `
[' lina_1', "That wasn't too bright."] -ch 513
`
  },
  {
    label: `[' lina_2', 'Wanna play with fire?']`,
    txt: `
[' lina_2', 'Wanna play with fire?'] -ch 514
`
  },
  {
    label: `[' lina_3', 'What a punk.']`,
    txt: `
[' lina_3', 'What a punk.'] -ch 515
`
  },
  {
    label: `[' lina_4', 'What in the blazes?']`,
    txt: `
[' lina_4', 'What in the blazes?'] -ch 516
`
  },
  {
    label: `[' lina_5', 'Come to mama!']`,
    txt: `
[' lina_5', 'Come to mama!'] -ch 517
`
  },
  {
    label: `[' lion_laugh', 'Who-ha-ha-ha-ha-ha-ha-he-hawha!']`,
    txt: `
[' lion_laugh', 'Who-ha-ha-ha-ha-ha-ha-he-hawha!'] -ch 518
`
  },
  {
    label: `[' lion_thank', 'Oh, hell yes.']`,
    txt: `
[' lion_thank', 'Oh, hell yes.'] -ch 519
`
  },
  {
    label: `[' lion_deny', 'Ah, sorry to disappoint you.']`,
    txt: `
[' lion_deny', 'Ah, sorry to disappoint you.'] -ch 520
`
  },
  {
    label: `[' lion_1', 'You thought to tame the lion?']`,
    txt: `
[' lion_1', 'You thought to tame the lion?'] -ch 521
`
  },
  {
    label: `[' lion_2', 'Feel the rage of a mage!']`,
    txt: `
[' lion_2', 'Feel the rage of a mage!'] -ch 522
`
  },
  {
    label: `[' lion_3', 'To hell with you!']`,
    txt: `
[' lion_3', 'To hell with you!'] -ch 523
`
  },
  {
    label: `[' lion_4', "I've got the magic touch."]`,
    txt: `
[' lion_4', "I've got the magic touch."] -ch 524
`
  },
  {
    label: `[' lion_5', "I've been to hell and back, and back to hell...and back."]`,
    txt: `
[' lion_5', "I've been to hell and back, and back to hell...and back."] -ch 525
`
  },
  {
    label: `[' lone_druid_laugh', 'Ah ha ha ha ha hah!']`,
    txt: `
[' lone_druid_laugh', 'Ah ha ha ha ha hah!'] -ch 526
`
  },
  {
    label: `[' lone_druid_thank', 'Skill comes with age!']`,
    txt: `
[' lone_druid_thank', 'Skill comes with age!'] -ch 527
`
  },
  {
    label: `[' lone_druid_deny', 'Ah, my old self!']`,
    txt: `
[' lone_druid_deny', 'Ah, my old self!'] -ch 528
`
  },
  {
    label: `[' lone_druid_1', 'Synergy!']`,
    txt: `
[' lone_druid_1', 'Synergy!'] -ch 529
`
  },
  {
    label: `[' lone_druid_2', 'I should know better by now.']`,
    txt: `
[' lone_druid_2', 'I should know better by now.'] -ch 530
`
  },
  {
    label: `[' lone_druid_3', 'A worthy exchange.']`,
    txt: `
[' lone_druid_3', 'A worthy exchange.'] -ch 531
`
  },
  {
    label: `[' lone_druid_4', 'What have you done?']`,
    txt: `
[' lone_druid_4', 'What have you done?'] -ch 532
`
  },
  {
    label: `[' lone_druid_5', 'Auuuuuhhh!']`,
    txt: `
[' lone_druid_5', 'Auuuuuhhh!'] -ch 533
`
  },
  {
    label: `[' luna_laugh', 'Ah ha ha ha ha ha ha!']`,
    txt: `
[' luna_laugh', 'Ah ha ha ha ha ha ha!'] -ch 534
`
  },
  {
    label: `[' luna_thank', 'Blessings upon a loyal warrior.']`,
    txt: `
[' luna_thank', 'Blessings upon a loyal warrior.'] -ch 535
`
  },
  {
    label: `[' luna_deny', 'Interesting!']`,
    txt: `
[' luna_deny', 'Interesting!'] -ch 536
`
  },
  {
    label: `[' luna_1', 'Lost in the woods, are you?']`,
    txt: `
[' luna_1', 'Lost in the woods, are you?'] -ch 537
`
  },
  {
    label: `[' luna_2', "W'scratch that idea!"]`,
    txt: `
[' luna_2', "W'scratch that idea!"] -ch 538
`
  },
  {
    label: `[' luna_3', "Isn't that a pretty thing!"]`,
    txt: `
[' luna_3', "Isn't that a pretty thing!"] -ch 539
`
  },
  {
    label: `[' luna_4', 'Piece of shite wizard.']`,
    txt: `
[' luna_4', 'Piece of shite wizard.'] -ch 540
`
  },
  {
    label: `[' luna_5', 'Let the sky tear down the unworthy!']`,
    txt: `
[' luna_5', 'Let the sky tear down the unworthy!'] -ch 541
`
  },
  {
    label: `[' lycan_laugh', 'Ah ha ha ha ha ha ha ha.']`,
    txt: `
[' lycan_laugh', 'Ah ha ha ha ha ha ha ha.'] -ch 542
`
  },
  {
    label: `[' lycan_thank', 'You fought well and true.']`,
    txt: `
[' lycan_thank', 'You fought well and true.'] -ch 543
`
  },
  {
    label: `[' lycan_deny', 'Go ahead, just try to kill me!']`,
    txt: `
[' lycan_deny', 'Go ahead, just try to kill me!'] -ch 544
`
  },
  {
    label: `[' lycan_1', 'Ha! That was a mauling.']`,
    txt: `
[' lycan_1', 'Ha! That was a mauling.'] -ch 545
`
  },
  {
    label: `[' lycan_2', 'I am the alpha wolf.']`,
    txt: `
[' lycan_2', 'I am the alpha wolf.'] -ch 546
`
  },
  {
    label: `[' lycan_3', 'The wolf is at your door.']`,
    txt: `
[' lycan_3', 'The wolf is at your door.'] -ch 547
`
  },
  {
    label: `[' lycan_4', 'Wolves need no armor.']`,
    txt: `
[' lycan_4', 'Wolves need no armor.'] -ch 548
`
  },
  {
    label: `[' lycan_5', "I've taken a Lycan to you. Ha ha ha ha ha."]`,
    txt: `
[' lycan_5', "I've taken a Lycan to you. Ha ha ha ha ha."] -ch 549
`
  },
  {
    label: `[' magnataur_laugh', 'Ah ha ha.']`,
    txt: `
[' magnataur_laugh', 'Ah ha ha.'] -ch 550
`
  },
  {
    label: `[' magnataur_thank', 'Yes, this will do just fine.']`,
    txt: `
[' magnataur_thank', 'Yes, this will do just fine.'] -ch 551
`
  },
  {
    label: `[' magnataur_deny', 'This is bullshit!']`,
    txt: `
[' magnataur_deny', 'This is bullshit!'] -ch 552
`
  },
  {
    label: `[' magnataur_1', 'Ha ha ha ha! What did you expect?']`,
    txt: `
[' magnataur_1', 'Ha ha ha ha! What did you expect?'] -ch 553
`
  },
  {
    label: `[' magnataur_2', 'Are you kidding me?']`,
    txt: `
[' magnataur_2', 'Are you kidding me?'] -ch 554
`
  },
  {
    label: `[' magnataur_3', "All in a day's work."]`,
    txt: `
[' magnataur_3', "All in a day's work."] -ch 555
`
  },
  {
    label: `[' magnataur_4', 'How shameful.']`,
    txt: `
[' magnataur_4', 'How shameful.'] -ch 556
`
  },
  {
    label: `[' magnataur_5', 'I tell you what. You touch my horn, I break your face.']`,
    txt: `
[' magnataur_5', 'I tell you what. You touch my horn, I break your face.'] -ch 557
`
  },
  {
    label: `[' marci_laugh Laughing Whistle']`,
    txt: `
[' marci_laugh Laughing Whistle'] -ch 558
`
  },
  {
    label: `[' marci_thank Thankful Whistle']`,
    txt: `
[' marci_thank Thankful Whistle'] -ch 559
`
  },
  {
    label: `[' marci_deny', 'Denying Whistle']`,
    txt: `
[' marci_deny', 'Denying Whistle'] -ch 560
`
  },
  {
    label: `[' marci_1', 'Friendly Whistle']`,
    txt: `
[' marci_1', 'Friendly Whistle'] -ch 561
`
  },
  {
    label: `[' marci_2', 'Greeting Whistle']`,
    txt: `
[' marci_2', 'Greeting Whistle'] -ch 562
`
  },
  {
    label: `[' marci_3', 'Mildly Impressed Whistle']`,
    txt: `
[' marci_3', 'Mildly Impressed Whistle'] -ch 563
`
  },
  {
    label: `[' marci_4', 'Surprised Whistle']`,
    txt: `
[' marci_4', 'Surprised Whistle'] -ch 564
`
  },
  {
    label: `[' marci_5', 'Sad Whistle']`,
    txt: `
[' marci_5', 'Sad Whistle'] -ch 565
`
  },
  {
    label: `[' mars_laugh', 'Huh huh ha ha ha ha ha ha ha haaa!']`,
    txt: `
[' mars_laugh', 'Huh huh ha ha ha ha ha ha ha haaa!'] -ch 566
`
  },
  {
    label: `[' mars_thank', 'My thanks will come later, when you least expect it!']`,
    txt: `
[' mars_thank', 'My thanks will come later, when you least expect it!'] -ch 567
`
  },
  {
    label: `[' mars_deny', "Ohh, that's no good."]`,
    txt: `
[' mars_deny', "Ohh, that's no good."] -ch 568
`
  },
  {
    label: `[' mars_1', " I'll always remember how foolish you looked."]`,
    txt: `
[' mars_1', " I'll always remember how foolish you looked."] -ch 569
`
  },
  {
    label: `[' mars_2', ' The only one surprised by this is you.']`,
    txt: `
[' mars_2', ' The only one surprised by this is you.'] -ch 570
`
  },
  {
    label: `[' mars_3', ' Fight me!']`,
    txt: `
[' mars_3', ' Fight me!'] -ch 571
`
  },
  {
    label: `[' mars_4', ' DADADA DA DA DA-DA-DA!']`,
    txt: `
[' mars_4', ' DADADA DA DA DA-DA-DA!'] -ch 572
`
  },
  {
    label: `[' mars_5', ' THIS IS DOOOOTAAAAA!']`,
    txt: `
[' mars_5', ' THIS IS DOOOOTAAAAA!'] -ch 573
`
  },
  {
    label: `[' medusa_laugh', 'Hmm hmm hmm ha ha ha ha ha!']`,
    txt: `
[' medusa_laugh', 'Hmm hmm hmm ha ha ha ha ha!'] -ch 574
`
  },
  {
    label: `[' medusa_thank', 'Brilliant.']`,
    txt: `
[' medusa_thank', 'Brilliant.'] -ch 575
`
  },
  {
    label: `[' medusa_deny', 'In your face.']`,
    txt: `
[' medusa_deny', 'In your face.'] -ch 576
`
  },
  {
    label: `[' medusa_1', "Don't resist the cobra, little bird."]`,
    txt: `
[' medusa_1', "Don't resist the cobra, little bird."] -ch 577
`
  },
  {
    label: `[' medusa_2', 'Oh, crap!']`,
    txt: `
[' medusa_2', 'Oh, crap!'] -ch 578
`
  },
  {
    label: `[' medusa_3', 'You knew I was cold-blooded.']`,
    txt: `
[' medusa_3', 'You knew I was cold-blooded.'] -ch 579
`
  },
  {
    label: `[' medusa_4', "Gaze upon Medusa's beauty, and despair!"]`,
    txt: `
[' medusa_4', "Gaze upon Medusa's beauty, and despair!"] -ch 580
`
  },
  {
    label: `[' medusa_5', 'Nobody look at anybody!']`,
    txt: `
[' medusa_5', 'Nobody look at anybody!'] -ch 581
`
  },
  {
    label: `[' meepo_laugh', 'Hnya Hnyahnyaha ha ha ha!']`,
    txt: `
[' meepo_laugh', 'Hnya Hnyahnyaha ha ha ha!'] -ch 582
`
  },
  {
    label: `[' meepo_thank', "Now that's what I'm talking about!"]`,
    txt: `
[' meepo_thank', "Now that's what I'm talking about!"] -ch 583
`
  },
  {
    label: `[' meepo_deny', 'How ya doin?']`,
    txt: `
[' meepo_deny', 'How ya doin?'] -ch 584
`
  },
  {
    label: `[' meepo_1', "Ah for cryin' out loud!"]`,
    txt: `
[' meepo_1', "Ah for cryin' out loud!"] -ch 585
`
  },
  {
    label: `[' meepo_2', 'Hey what kind of scam you running here?']`,
    txt: `
[' meepo_2', 'Hey what kind of scam you running here?'] -ch 586
`
  },
  {
    label: `[' meepo_3', "This is a real freakin' embarrasment."]`,
    txt: `
[' meepo_3', "This is a real freakin' embarrasment."] -ch 587
`
  },
  {
    label: `[' meepo_4', "I feel fine. Don't know what everyone's worried about."]`,
    txt: `
[' meepo_4', "I feel fine. Don't know what everyone's worried about."] -ch 588
`
  },
  {
    label: `[' meepo_5', "Freakin' unbelievable."]`,
    txt: `
[' meepo_5', "Freakin' unbelievable."] -ch 589
`
  },
  {
    label: `[' mirana_laugh', 'Ha ha ha ha ha ha!']`,
    txt: `
[' mirana_laugh', 'Ha ha ha ha ha ha!'] -ch 590
`
  },
  {
    label: `[' mirana_thank', 'A gift from the night!']`,
    txt: `
[' mirana_thank', 'A gift from the night!'] -ch 591
`
  },
  {
    label: `[' mirana_deny', 'Catch us if you can!']`,
    txt: `
[' mirana_deny', 'Catch us if you can!'] -ch 592
`
  },
  {
    label: `[' mirana_1', 'You have learned nothing.']`,
    txt: `
[' mirana_1', 'You have learned nothing.'] -ch 593
`
  },
  {
    label: `[' mirana_2', 'Nicely done!']`,
    txt: `
[' mirana_2', 'Nicely done!'] -ch 594
`
  },
  {
    label: `[' mirana_3', 'Run like the dogs you are!']`,
    txt: `
[' mirana_3', 'Run like the dogs you are!'] -ch 595
`
  },
  {
    label: `[' mirana_4', 'Here, kitty-kitty-kitty....']`,
    txt: `
[' mirana_4', 'Here, kitty-kitty-kitty....'] -ch 596
`
  },
  {
    label: `[' mirana_5', 'It was not luck but skill!']`,
    txt: `
[' mirana_5', 'It was not luck but skill!'] -ch 597
`
  },
  {
    label: `[' monkey_king_laugh', 'Ah ha ha ha ha ha. Woohoohoohoo. Ohhh heee.']`,
    txt: `
[' monkey_king_laugh', 'Ah ha ha ha ha ha. Woohoohoohoo. Ohhh heee.'] -ch 598
`
  },
  {
    label: `[' monkey_king_thank', "This'll work."]`,
    txt: `
[' monkey_king_thank', "This'll work."] -ch 599
`
  },
  {
    label: `[' monkey_king_deny', 'I feel better already.']`,
    txt: `
[' monkey_king_deny', 'I feel better already.'] -ch 600
`
  },
  {
    label: `[' monkey_king_1', "Ohh, I'll be signing autographs out front."]`,
    txt: `
[' monkey_king_1', "Ohh, I'll be signing autographs out front."] -ch 601
`
  },
  {
    label: `[' monkey_king_2', 'Ok, that was unexpected.']`,
    txt: `
[' monkey_king_2', 'Ok, that was unexpected.'] -ch 602
`
  },
  {
    label: `[' monkey_king_3', 'Alright.']`,
    txt: `
[' monkey_king_3', 'Alright.'] -ch 603
`
  },
  {
    label: `[' monkey_king_4', "I'll pretend I didn't enjoy this."]`,
    txt: `
[' monkey_king_4', "I'll pretend I didn't enjoy this."] -ch 604
`
  },
  {
    label: `[' monkey_king_5', 'This was over before it started.']`,
    txt: `
[' monkey_king_5', 'This was over before it started.'] -ch 605
`
  },
  {
    label: `[' morphling_laugh', 'Ha ha ha ha ha ha ha ha ha ha!']`,
    txt: `
[' morphling_laugh', 'Ha ha ha ha ha ha ha ha ha ha!'] -ch 606
`
  },
  {
    label: `[' morphling_thank', 'I like what I see.']`,
    txt: `
[' morphling_thank', 'I like what I see.'] -ch 607
`
  },
  {
    label: `[' morphling_deny', "You're in over your head."]`,
    txt: `
[' morphling_deny', "You're in over your head."] -ch 608
`
  },
  {
    label: `[' morphling_1', 'Boiling rage!']`,
    txt: `
[' morphling_1', 'Boiling rage!'] -ch 609
`
  },
  {
    label: `[' morphling_2', 'Always refreshing.']`,
    txt: `
[' morphling_2', 'Always refreshing.'] -ch 610
`
  },
  {
    label: `[' morphling_3', 'The tide has turned!']`,
    txt: `
[' morphling_3', 'The tide has turned!'] -ch 611
`
  },
  {
    label: `[' morphling_4', "Didn't you see me waving?"]`,
    txt: `
[' morphling_4', "Didn't you see me waving?"] -ch 612
`
  },
  {
    label: `[' morphling_5', "You're washed up!"]`,
    txt: `
[' morphling_5', "You're washed up!"] -ch 613
`
  },
  {
    label: `[' naga_siren_laugh', 'Ahehehaheh.']`,
    txt: `
[' naga_siren_laugh', 'Ahehehaheh.'] -ch 614
`
  },
  {
    label: `[' naga_siren_thank', 'That went swimmingly.']`,
    txt: `
[' naga_siren_thank', 'That went swimmingly.'] -ch 615
`
  },
  {
    label: `[' naga_siren_deny', 'A sour note.']`,
    txt: `
[' naga_siren_deny', 'A sour note.'] -ch 616
`
  },
  {
    label: `[' naga_siren_1', "You're in deep now."]`,
    txt: `
[' naga_siren_1', "You're in deep now."] -ch 617
`
  },
  {
    label: `[' naga_siren_2', "That's enough out of you."]`,
    txt: `
[' naga_siren_2', "That's enough out of you."] -ch 618
`
  },
  {
    label: `[' naga_siren_3', "That's got to suck."]`,
    txt: `
[' naga_siren_3', "That's got to suck."] -ch 619
`
  },
  {
    label: `[' naga_siren_4', 'It had to be.']`,
    txt: `
[' naga_siren_4', 'It had to be.'] -ch 620
`
  },
  {
    label: `[' naga_siren_5', "My legs! I can't feel my legs."]`,
    txt: `
[' naga_siren_5', "My legs! I can't feel my legs."] -ch 621
`
  },
  {
    label: `[' necrolyte_laugh', 'Ha ha ha ha ha ha ha ha ha ha ha ha!']`,
    txt: `
[' necrolyte_laugh', 'Ha ha ha ha ha ha ha ha ha ha ha ha!'] -ch 630
`
  },
  {
    label: `[' necrolyte_thank', 'Breathe it in.']`,
    txt: `
[' necrolyte_thank', 'Breathe it in.'] -ch 631
`
  },
  {
    label: `[' necrolyte_deny', 'That was costly.']`,
    txt: `
[' necrolyte_deny', 'That was costly.'] -ch 632
`
  },
  {
    label: `[' necrolyte_1', 'The stench of death is upon you.']`,
    txt: `
[' necrolyte_1', 'The stench of death is upon you.'] -ch 633
`
  },
  {
    label: `[' necrolyte_2', "What do you mean, cheer up? I'm quite cheerful."]`,
    txt: `
[' necrolyte_2', "What do you mean, cheer up? I'm quite cheerful."] -ch 634
`
  },
  {
    label: `[' necrolyte_3', "It's all gone rotten."]`,
    txt: `
[' necrolyte_3', "It's all gone rotten."] -ch 635
`
  },
  {
    label: `[' necrolyte_4', 'To your health. Ha ha ha ha ha ha ha ha ha.']`,
    txt: `
[' necrolyte_4', 'To your health. Ha ha ha ha ha ha ha ha ha.'] -ch 636
`
  },
  {
    label: `[' necrolyte_5', 'I am the rotten apple that spoils the bunch.']`,
    txt: `
[' necrolyte_5', 'I am the rotten apple that spoils the bunch.'] -ch 637
`
  },
  {
    label: `[' nevermore_laugh', 'Ah ha ha ha ha ha!']`,
    txt: `
[' nevermore_laugh', 'Ah ha ha ha ha ha!'] -ch 790
`
  },
  {
    label: `[' nevermore_thank', 'Well bless your soul.']`,
    txt: `
[' nevermore_thank', 'Well bless your soul.'] -ch 791
`
  },
  {
    label: `[' nevermore_deny', 'Outplayed.']`,
    txt: `
[' nevermore_deny', 'Outplayed.'] -ch 792
`
  },
  {
    label: `[' nevermore_1', 'A beautiful soul for my collection.']`,
    txt: `
[' nevermore_1', 'A beautiful soul for my collection.'] -ch 793
`
  },
  {
    label: `[' nevermore_2', 'Fear my presence.']`,
    txt: `
[' nevermore_2', 'Fear my presence.'] -ch 794
`
  },
  {
    label: `[' nevermore_3', "I'll take it."]`,
    txt: `
[' nevermore_3', "I'll take it."] -ch 795
`
  },
  {
    label: `[' nevermore_4', 'You can never hide!']`,
    txt: `
[' nevermore_4', 'You can never hide!'] -ch 796
`
  },
  {
    label: `[' nevermore_5', 'Ozh icha gluth izh sol.']`,
    txt: `
[' nevermore_5', 'Ozh icha gluth izh sol.'] -ch 797
`
  },
  {
    label: `[' night_stalker_laugh', 'Heh heh heh hah heh hehhhh.']`,
    txt: `
[' night_stalker_laugh', 'Heh heh heh hah heh hehhhh.'] -ch 638
`
  },
  {
    label: `[' night_stalker_thank', 'Now they will suffer.']`,
    txt: `
[' night_stalker_thank', 'Now they will suffer.'] -ch 639
`
  },
  {
    label: `[' night_stalker_deny', 'Your nightmare continues.']`,
    txt: `
[' night_stalker_deny', 'Your nightmare continues.'] -ch 640
`
  },
  {
    label: `[' night_stalker_1', 'Just what I needed!']`,
    txt: `
[' night_stalker_1', 'Just what I needed!'] -ch 641
`
  },
  {
    label: `[' night_stalker_2', "There's no escape."]`,
    txt: `
[' night_stalker_2', "There's no escape."] -ch 642
`
  },
  {
    label: `[' night_stalker_3', 'Darkness hungers.']`,
    txt: `
[' night_stalker_3', 'Darkness hungers.'] -ch 643
`
  },
  {
    label: `[' night_stalker_4', "It's feeding time."]`,
    txt: `
[' night_stalker_4', "It's feeding time."] -ch 644
`
  },
  {
    label: `[' night_stalker_5', "I'm the beast of bedtime tales."]`,
    txt: `
[' night_stalker_5', "I'm the beast of bedtime tales."] -ch 645
`
  },
  {
    label: `[' nyx_assassin_laugh', 'Heehehheh Nyx, Nyx.']`,
    txt: `
[' nyx_assassin_laugh', 'Heehehheh Nyx, Nyx.'] -ch 646
`
  },
  {
    label: `[' nyx_assassin_thank', 'Nice.']`,
    txt: `
[' nyx_assassin_thank', 'Nice.'] -ch 647
`
  },
  {
    label: `[' nyx_assassin_deny', 'How did this happen?']`,
    txt: `
[' nyx_assassin_deny', 'How did this happen?'] -ch 648
`
  },
  {
    label: `[' nyx_assassin_1', 'Talentless.']`,
    txt: `
[' nyx_assassin_1', 'Talentless.'] -ch 649
`
  },
  {
    label: `[' nyx_assassin_2', 'Nyx chichcichcihcihchi.']`,
    txt: `
[' nyx_assassin_2', 'Nyx chichcichcihcihchi.'] -ch 650
`
  },
  {
    label: `[' nyx_assassin_3', "I'm waiting for you."]`,
    txt: `
[' nyx_assassin_3', "I'm waiting for you."] -ch 651
`
  },
  {
    label: `[' nyx_assassin_4', 'Assassinated.']`,
    txt: `
[' nyx_assassin_4', 'Assassinated.'] -ch 652
`
  },
  {
    label: `[' nyx_assassin_5', 'Nyx, Nyx, Nyx, Nyx.']`,
    txt: `
[' nyx_assassin_5', 'Nyx, Nyx, Nyx, Nyx.'] -ch 653
`
  },
  {
    label: `[' obsidian_destroyer_laugh', 'Ha ha ha ha ha ha ha ha ha!']`,
    txt: `
[' obsidian_destroyer_laugh', 'Ha ha ha ha ha ha ha ha ha!'] -ch 654
`
  },
  {
    label: `[' obsidian_destroyer_thank', 'I have solid intelligence on what is to come.']`,
    txt: `
[' obsidian_destroyer_thank', 'I have solid intelligence on what is to come.'] -ch 655
`
  },
  {
    label: `[' obsidian_destroyer_deny', 'My purpose fulfilled.']`,
    txt: `
[' obsidian_destroyer_deny', 'My purpose fulfilled.'] -ch 656
`
  },
  {
    label: `[' obsidian_destroyer_1', 'Your future is grim.']`,
    txt: `
[' obsidian_destroyer_1', 'Your future is grim.'] -ch 657
`
  },
  {
    label: `[' obsidian_destroyer_2', 'This changes nothing.']`,
    txt: `
[' obsidian_destroyer_2', 'This changes nothing.'] -ch 658
`
  },
  {
    label: `[' obsidian_destroyer_3', 'You let yourself get carried away.']`,
    txt: `
[' obsidian_destroyer_3', 'You let yourself get carried away.'] -ch 659
`
  },
  {
    label: `[' obsidian_destroyer_4', 'I am ill disposed towards you.']`,
    txt: `
[' obsidian_destroyer_4', 'I am ill disposed towards you.'] -ch 660
`
  },
  {
    label: `[' obsidian_destroyer_5', "You're insane."]`,
    txt: `
[' obsidian_destroyer_5', "You're insane."] -ch 661
`
  },
  {
    label: `[' ogre_magi_laugh', "Hee hee he he he he he aha ha... What're we laughing about?"]`,
    txt: `
[' ogre_magi_laugh', "Hee hee he he he he he aha ha... What're we laughing about?"] -ch 662
`
  },
  {
    label: `[' ogre_magi_thank', 'That was skill all right. Pure skill.']`,
    txt: `
[' ogre_magi_thank', 'That was skill all right. Pure skill.'] -ch 663
`
  },
  {
    label: `[' ogre_magi_deny', "Ye gods, how'd that happen? What the. Who'd the. How'd that happen?"]`,
    txt: `
[' ogre_magi_deny', "Ye gods, how'd that happen? What the. Who'd the. How'd that happen?"] -ch 664
`
  },
  {
    label: `[' ogre_magi_1', 'Expertise! From the experts.']`,
    txt: `
[' ogre_magi_1', 'Expertise! From the experts.'] -ch 665
`
  },
  {
    label: `[' ogre_magi_2', 'Good work. I thought that was you.']`,
    txt: `
[' ogre_magi_2', 'Good work. I thought that was you.'] -ch 666
`
  },
  {
    label: `[' ogre_magi_3', 'You need to work on your skill. Like us.']`,
    txt: `
[' ogre_magi_3', 'You need to work on your skill. Like us.'] -ch 667
`
  },
  {
    label: `[' ogre_magi_4', 'We gave you a head start!']`,
    txt: `
[' ogre_magi_4', 'We gave you a head start!'] -ch 668
`
  },
  {
    label: `[' ogre_magi_5', 'That had to hurt. I almost feel bad.']`,
    txt: `
[' ogre_magi_5', 'That had to hurt. I almost feel bad.'] -ch 669
`
  },
  {
    label: `[' omniknight_laugh', 'Mehooweheh hwh hew.']`,
    txt: `
[' omniknight_laugh', 'Mehooweheh hwh hew.'] -ch 670
`
  },
  {
    label: `[' omniknight_thank', 'Beautiful.']`,
    txt: `
[' omniknight_thank', 'Beautiful.'] -ch 671
`
  },
  {
    label: `[' omniknight_deny', 'Nailed it.']`,
    txt: `
[' omniknight_deny', 'Nailed it.'] -ch 672
`
  },
  {
    label: `[' omniknight_1', 'Another stain on the battlefield.']`,
    txt: `
[' omniknight_1', 'Another stain on the battlefield.'] -ch 673
`
  },
  {
    label: `[' omniknight_2', 'Your guilt weighs heavily.']`,
    txt: `
[' omniknight_2', 'Your guilt weighs heavily.'] -ch 674
`
  },
  {
    label: `[' omniknight_3', 'Be at peace you wretched fool.']`,
    txt: `
[' omniknight_3', 'Be at peace you wretched fool.'] -ch 675
`
  },
  {
    label: `[' omniknight_4', 'You chose poorly.']`,
    txt: `
[' omniknight_4', 'You chose poorly.'] -ch 676
`
  },
  {
    label: `[' omniknight_5', 'The All-knowing One senses your regret.']`,
    txt: `
[' omniknight_5', 'The All-knowing One senses your regret.'] -ch 677
`
  },
  {
    label: `[' oracle_laugh', 'He ha ha he ha ha!']`,
    txt: `
[' oracle_laugh', 'He ha ha he ha ha!'] -ch 678
`
  },
  {
    label: `[' oracle_thank', 'Faith in fate restored.']`,
    txt: `
[' oracle_thank', 'Faith in fate restored.'] -ch 679
`
  },
  {
    label: `[' oracle_deny', 'I want to die.']`,
    txt: `
[' oracle_deny', 'I want to die.'] -ch 680
`
  },
  {
    label: `[' oracle_1', 'I saw that.']`,
    txt: `
[' oracle_1', 'I saw that.'] -ch 681
`
  },
  {
    label: `[' oracle_2', 'I am shocked. Shocked!']`,
    txt: `
[' oracle_2', 'I am shocked. Shocked!'] -ch 682
`
  },
  {
    label: `[' oracle_3', 'That was odd indeed!']`,
    txt: `
[' oracle_3', 'That was odd indeed!'] -ch 683
`
  },
  {
    label: `[' oracle_4', "Even you should've seen that coming. But you didn't."]`,
    txt: `
[' oracle_4', "Even you should've seen that coming. But you didn't."] -ch 684
`
  },
  {
    label: `[' oracle_5', 'You will die in a house fire.']`,
    txt: `
[' oracle_5', 'You will die in a house fire.'] -ch 685
`
  },
  {
    label: `[' pangolier_laugh', 'Aaaah ha hahahaha hahahaaa huu.']`,
    txt: `
[' pangolier_laugh', 'Aaaah ha hahahaha hahahaaa huu.'] -ch 686
`
  },
  {
    label: `[' pangolier_thank', 'Was that intentional? It looked intentional.']`,
    txt: `
[' pangolier_thank', 'Was that intentional? It looked intentional.'] -ch 687
`
  },
  {
    label: `[' pangolier_deny', "Were you watching? That's how it's done."]`,
    txt: `
[' pangolier_deny', "Were you watching? That's how it's done."] -ch 688
`
  },
  {
    label: `[' pangolier_1', 'Try a bit harder next time...']`,
    txt: `
[' pangolier_1', 'Try a bit harder next time...'] -ch 689
`
  },
  {
    label: `[' pangolier_2', 'That does not look good.']`,
    txt: `
[' pangolier_2', 'That does not look good.'] -ch 690
`
  },
  {
    label: `[' pangolier_3', 'Beep Beep!']`,
    txt: `
[' pangolier_3', 'Beep Beep!'] -ch 691
`
  },
  {
    label: `[' pangolier_4', "Now it's just unfair."]`,
    txt: `
[' pangolier_4', "Now it's just unfair."] -ch 692
`
  },
  {
    label: `[' pangolier_5', 'So this whole mess is all your fault?']`,
    txt: `
[' pangolier_5', 'So this whole mess is all your fault?'] -ch 693
`
  },
  {
    label: `[' phantom_assassin_laugh', 'Ho ho ho ho ho ha ha ha']`,
    txt: `
[' phantom_assassin_laugh', 'Ho ho ho ho ho ha ha ha'] -ch 694
`
  },
  {
    label: `[' phantom_assassin_thank', 'Mmm, divine.']`,
    txt: `
[' phantom_assassin_thank', 'Mmm, divine.'] -ch 695
`
  },
  {
    label: `[' phantom_assassin_deny', 'All according to plan.']`,
    txt: `
[' phantom_assassin_deny', 'All according to plan.'] -ch 696
`
  },
  {
    label: `[' phantom_assassin_1', 'Death at my hands is an honor.']`,
    txt: `
[' phantom_assassin_1', 'Death at my hands is an honor.'] -ch 697
`
  },
  {
    label: `[' phantom_assassin_2', 'That went well, I think.']`,
    txt: `
[' phantom_assassin_2', 'That went well, I think.'] -ch 698
`
  },
  {
    label: `[' phantom_assassin_3', 'How many daggers am I holding up?']`,
    txt: `
[' phantom_assassin_3', 'How many daggers am I holding up?'] -ch 699
`
  },
  {
    label: `[' phantom_assassin_4', 'Ha, ahhh, ha ha, no no no.']`,
    txt: `
[' phantom_assassin_4', 'Ha, ahhh, ha ha, no no no.'] -ch 700
`
  },
  {
    label: `[' phantom_assassin_5', "I'm an immaterial girl!"]`,
    txt: `
[' phantom_assassin_5', "I'm an immaterial girl!"] -ch 701
`
  },
  {
    label: `[' phantom_lancer_laugh', 'Ha ha ha ha ha ha ha ha ha ha ha ha ha!']`,
    txt: `
[' phantom_lancer_laugh', 'Ha ha ha ha ha ha ha ha ha ha ha ha ha!'] -ch 702
`
  },
  {
    label: `[' phantom_lancer_thank', 'What an amazing thing.']`,
    txt: `
[' phantom_lancer_thank', 'What an amazing thing.'] -ch 703
`
  },
  {
    label: `[' phantom_lancer_deny', 'Such simple minds.']`,
    txt: `
[' phantom_lancer_deny', 'Such simple minds.'] -ch 704
`
  },
  {
    label: `[' phantom_lancer_1', 'We come for you!']`,
    txt: `
[' phantom_lancer_1', 'We come for you!'] -ch 705
`
  },
  {
    label: `[' phantom_lancer_2', 'Now this is just silly.']`,
    txt: `
[' phantom_lancer_2', 'Now this is just silly.'] -ch 706
`
  },
  {
    label: `[' phantom_lancer_3', 'We have more where that came from.']`,
    txt: `
[' phantom_lancer_3', 'We have more where that came from.'] -ch 707
`
  },
  {
    label: `[' phantom_lancer_4', 'Numbers have accomplished what strategy alone could not.']`,
    txt: `
[' phantom_lancer_4', 'Numbers have accomplished what strategy alone could not.'] -ch 708
`
  },
  {
    label: `[' phantom_lancer_5', 'We outnumbered you. We outnumber them all!']`,
    txt: `
[' phantom_lancer_5', 'We outnumbered you. We outnumber them all!'] -ch 709
`
  },
  {
    label: `[' phoenix_laugh', 'Laughing Squawk']`,
    txt: `
[' phoenix_laugh', 'Laughing Squawk'] -ch 710
`
  },
  {
    label: `[' phoenix_thank', 'Thankful Squawk']`,
    txt: `
[' phoenix_thank', 'Thankful Squawk'] -ch 711
`
  },
  {
    label: `[' phoenix_deny', 'Denying Squawk']`,
    txt: `
[' phoenix_deny', 'Denying Squawk'] -ch 712
`
  },
  {
    label: `[' phoenix_1', 'Triumphant Squawk']`,
    txt: `
[' phoenix_1', 'Triumphant Squawk'] -ch 713
`
  },
  {
    label: `[' phoenix_2', 'Sorrowful Squawk']`,
    txt: `
[' phoenix_2', 'Sorrowful Squawk'] -ch 714
`
  },
  {
    label: `[' phoenix_3', 'Taunting Squawk']`,
    txt: `
[' phoenix_3', 'Taunting Squawk'] -ch 715
`
  },
  {
    label: `[' phoenix_4', 'Angry Squawk']`,
    txt: `
[' phoenix_4', 'Angry Squawk'] -ch 716
`
  },
  {
    label: `[' phoenix_5', 'Contented Squawk']`,
    txt: `
[' phoenix_5', 'Contented Squawk'] -ch 717
`
  },
  {
    label: `[' puck_laugh', 'Ha ha!']`,
    txt: `
[' puck_laugh', 'Ha ha!'] -ch 718
`
  },
  {
    label: `[' puck_thank', 'Interesting.']`,
    txt: `
[' puck_thank', 'Interesting.'] -ch 719
`
  },
  {
    label: `[' puck_deny', 'You might wish to retract your last move.']`,
    txt: `
[' puck_deny', 'You might wish to retract your last move.'] -ch 720
`
  },
  {
    label: `[' puck_1', 'Greetings!']`,
    txt: `
[' puck_1', 'Greetings!'] -ch 721
`
  },
  {
    label: `[' puck_2', 'What is this, a game of some sort?']`,
    txt: `
[' puck_2', 'What is this, a game of some sort?'] -ch 722
`
  },
  {
    label: `[' puck_3', 'The greatest tragedy of our eon.']`,
    txt: `
[' puck_3', 'The greatest tragedy of our eon.'] -ch 723
`
  },
  {
    label: `[' puck_4', 'Was that smart?']`,
    txt: `
[' puck_4', 'Was that smart?'] -ch 724
`
  },
  {
    label: `[' puck_5', 'I am unfamiliar with this feeling. Is it joy?']`,
    txt: `
[' puck_5', 'I am unfamiliar with this feeling. Is it joy?'] -ch 725
`
  },
  {
    label: `[' pudge_laugh', 'Hm hm hm hm ha ha ha.']`,
    txt: `
[' pudge_laugh', 'Hm hm hm hm ha ha ha.'] -ch 726
`
  },
  {
    label: `[' pudge_thank', "That's a bit of all right."]`,
    txt: `
[' pudge_thank', "That's a bit of all right."] -ch 727
`
  },
  {
    label: `[' pudge_deny', 'Oops. Was that me?']`,
    txt: `
[' pudge_deny', 'Oops. Was that me?'] -ch 728
`
  },
  {
    label: `[' pudge_1', 'Time for a little butchery!']`,
    txt: `
[' pudge_1', 'Time for a little butchery!'] -ch 729
`
  },
  {
    label: `[' pudge_2', 'Nothing better than a nice raw liver.']`,
    txt: `
[' pudge_2', 'Nothing better than a nice raw liver.'] -ch 730
`
  },
  {
    label: `[' pudge_3', 'Whateva.']`,
    txt: `
[' pudge_3', 'Whateva.'] -ch 731
`
  },
  {
    label: `[' pudge_4', 'Delicious...']`,
    txt: `
[' pudge_4', 'Delicious...'] -ch 732
`
  },
  {
    label: `[' pudge_5', "You'll look good with an apple in yer mouth!"]`,
    txt: `
[' pudge_5', "You'll look good with an apple in yer mouth!"] -ch 733
`
  },
  {
    label: `[' pugna_laugh', 'Ha ha ha ha ha ha.']`,
    txt: `
[' pugna_laugh', 'Ha ha ha ha ha ha.'] -ch 734
`
  },
  {
    label: `[' pugna_thank', 'Ah, this is going to be good.']`,
    txt: `
[' pugna_thank', 'Ah, this is going to be good.'] -ch 735
`
  },
  {
    label: `[' pugna_deny', "You're only making it worse."]`,
    txt: `
[' pugna_deny', "You're only making it worse."] -ch 736
`
  },
  {
    label: `[' pugna_1', 'Aw, did I do that?']`,
    txt: `
[' pugna_1', 'Aw, did I do that?'] -ch 737
`
  },
  {
    label: `[' pugna_2', 'Anyone miss me?']`,
    txt: `
[' pugna_2', 'Anyone miss me?'] -ch 738
`
  },
  {
    label: `[' pugna_3', 'Time to earn myself a bad reputation.']`,
    txt: `
[' pugna_3', 'Time to earn myself a bad reputation.'] -ch 739
`
  },
  {
    label: `[' pugna_4', 'You did that to yourself.']`,
    txt: `
[' pugna_4', 'You did that to yourself.'] -ch 740
`
  },
  {
    label: `[' pugna_5', "You're wasting your life."]`,
    txt: `
[' pugna_5', "You're wasting your life."] -ch 741
`
  },
  {
    label: `[' queenofpain_laugh', 'Uh ha ha ha ha ha ha ha ha ha ha ha!']`,
    txt: `
[' queenofpain_laugh', 'Uh ha ha ha ha ha ha ha ha ha ha ha!'] -ch 742
`
  },
  {
    label: `[' queenofpain_thank', 'There will be pain, there will be screaming.']`,
    txt: `
[' queenofpain_thank', 'There will be pain, there will be screaming.'] -ch 743
`
  },
  {
    label: `[' queenofpain_deny', 'You hurt the ones you love.']`,
    txt: `
[' queenofpain_deny', 'You hurt the ones you love.'] -ch 744
`
  },
  {
    label: `[' queenofpain_1', 'That was perfect.']`,
    txt: `
[' queenofpain_1', 'That was perfect.'] -ch 745
`
  },
  {
    label: `[' queenofpain_2', 'Does this hurt?']`,
    txt: `
[' queenofpain_2', 'Does this hurt?'] -ch 746
`
  },
  {
    label: `[' queenofpain_3', 'I love it when you resist.']`,
    txt: `
[' queenofpain_3', 'I love it when you resist.'] -ch 747
`
  },
  {
    label: `[' queenofpain_4', 'You want me? Come get me.']`,
    txt: `
[' queenofpain_4', 'You want me? Come get me.'] -ch 748
`
  },
  {
    label: `[' queenofpain_5', "I know I'm a pain, but you love me anyway."]`,
    txt: `
[' queenofpain_5', "I know I'm a pain, but you love me anyway."] -ch 749
`
  },
  {
    label: `[' rattletrap_laugh', 'Ha ha ha ha ha ha!']`,
    txt: `
[' rattletrap_laugh', 'Ha ha ha ha ha ha!'] -ch 254
`
  },
  {
    label: `[' rattletrap_thank', 'That oughta rattle em, yeah!']`,
    txt: `
[' rattletrap_thank', 'That oughta rattle em, yeah!'] -ch 255
`
  },
  {
    label: `[' rattletrap_deny', 'Not what you expected?']`,
    txt: `
[' rattletrap_deny', 'Not what you expected?'] -ch 256
`
  },
  {
    label: `[' rattletrap_1', 'Tell me someone saw that!']`,
    txt: `
[' rattletrap_1', 'Tell me someone saw that!'] -ch 257
`
  },
  {
    label: `[' rattletrap_2', 'Ha, that tickles!']`,
    txt: `
[' rattletrap_2', 'Ha, that tickles!'] -ch 258
`
  },
  {
    label: `[' rattletrap_3', 'Whoa!']`,
    txt: `
[' rattletrap_3', 'Whoa!'] -ch 259
`
  },
  {
    label: `[' rattletrap_4', 'Bleep bloop, I am a robot. Eh, just kidding.']`,
    txt: `
[' rattletrap_4', 'Bleep bloop, I am a robot. Eh, just kidding.'] -ch 260
`
  },
  {
    label: `[' rattletrap_5', 'That is so metal!']`,
    txt: `
[' rattletrap_5', 'That is so metal!'] -ch 261
`
  },
  {
    label: `[' razor_laugh', 'Ah ha ha ha ha ha ha ha ha.']`,
    txt: `
[' razor_laugh', 'Ah ha ha ha ha ha ha ha ha.'] -ch 750
`
  },
  {
    label: `[' razor_thank', 'I sense a connection between us!']`,
    txt: `
[' razor_thank', 'I sense a connection between us!'] -ch 751
`
  },
  {
    label: `[' razor_deny', 'You can run. You should run.']`,
    txt: `
[' razor_deny', 'You can run. You should run.'] -ch 752
`
  },
  {
    label: `[' razor_1', 'You are dead. Dead.']`,
    txt: `
[' razor_1', 'You are dead. Dead.'] -ch 753
`
  },
  {
    label: `[' razor_2', 'Your ashes will fall like rain.']`,
    txt: `
[' razor_2', 'Your ashes will fall like rain.'] -ch 754
`
  },
  {
    label: `[' razor_3', 'Shocking.']`,
    txt: `
[' razor_3', 'Shocking.'] -ch 755
`
  },
  {
    label: `[' razor_4', 'This will only hurt forever.']`,
    txt: `
[' razor_4', 'This will only hurt forever.'] -ch 756
`
  },
  {
    label: `[' razor_5', 'Zapped your ass!']`,
    txt: `
[' razor_5', 'Zapped your ass!'] -ch 757
`
  },
  {
    label: `[' riki_laugh', 'hoo hoo hoo hoo hoo hoo hoo.']`,
    txt: `
[' riki_laugh', 'hoo hoo hoo hoo hoo hoo hoo.'] -ch 758
`
  },
  {
    label: `[' riki_thank', 'Contract complete.']`,
    txt: `
[' riki_thank', 'Contract complete.'] -ch 759
`
  },
  {
    label: `[' riki_deny', "Heh-ho, you didn't see that coming."]`,
    txt: `
[' riki_deny', "Heh-ho, you didn't see that coming."] -ch 760
`
  },
  {
    label: `[' riki_1', 'Why prolong the inevitable?']`,
    txt: `
[' riki_1', 'Why prolong the inevitable?'] -ch 761
`
  },
  {
    label: `[' riki_2', 'Peek-a-boo.']`,
    txt: `
[' riki_2', 'Peek-a-boo.'] -ch 762
`
  },
  {
    label: `[' riki_3', "If you can see me, you're already dead."]`,
    txt: `
[' riki_3', "If you can see me, you're already dead."] -ch 763
`
  },
  {
    label: `[' riki_4', "I've been here the whole time."]`,
    txt: `
[' riki_4', "I've been here the whole time."] -ch 764
`
  },
  {
    label: `[' riki_5', "Oh you're dead. What a surprise."]`,
    txt: `
[' riki_5', "Oh you're dead. What a surprise."] -ch 765
`
  },
  {
    label: `[' rubick_laugh', 'Ah ha ha! Eh he he he he he he he he he!']`,
    txt: `
[' rubick_laugh', 'Ah ha ha! Eh he he he he he he he he he!'] -ch 766
`
  },
  {
    label: `[' rubick_thank', 'Excellent idea!']`,
    txt: `
[' rubick_thank', 'Excellent idea!'] -ch 767
`
  },
  {
    label: `[' rubick_deny', 'I almost feel bad.']`,
    txt: `
[' rubick_deny', 'I almost feel bad.'] -ch 768
`
  },
  {
    label: `[' rubick_1', 'That perked me up a bit!']`,
    txt: `
[' rubick_1', 'That perked me up a bit!'] -ch 769
`
  },
  {
    label: `[' rubick_2', 'Your name offends me.']`,
    txt: `
[' rubick_2', 'Your name offends me.'] -ch 770
`
  },
  {
    label: `[' rubick_3', 'What a surprise!']`,
    txt: `
[' rubick_3', 'What a surprise!'] -ch 771
`
  },
  {
    label: `[' rubick_4', 'Whoops!']`,
    txt: `
[' rubick_4', 'Whoops!'] -ch 772
`
  },
  {
    label: `[' rubick_5', 'Exquisite! Absolutely exquisite!']`,
    txt: `
[' rubick_5', 'Exquisite! Absolutely exquisite!'] -ch 773
`
  },
  {
    label: `[' sand_king_laugh', 'Ha ha ha ha ha ha ha!']`,
    txt: `
[' sand_king_laugh', 'Ha ha ha ha ha ha ha!'] -ch 774
`
  },
  {
    label: `[' sand_king_thank', 'You have done a great service.']`,
    txt: `
[' sand_king_thank', 'You have done a great service.'] -ch 775
`
  },
  {
    label: `[' sand_king_deny', "Stings, don't it?"]`,
    txt: `
[' sand_king_deny', "Stings, don't it?"] -ch 776
`
  },
  {
    label: `[' sand_king_1', 'Bow to your liege.']`,
    txt: `
[' sand_king_1', 'Bow to your liege.'] -ch 777
`
  },
  {
    label: `[' sand_king_2', 'A Sandy V-V-Victory!']`,
    txt: `
[' sand_king_2', 'A Sandy V-V-Victory!'] -ch 778
`
  },
  {
    label: `[' sand_king_3', "Where do you think you're going?"]`,
    txt: `
[' sand_king_3', "Where do you think you're going?"] -ch 779
`
  },
  {
    label: `[' sand_king_4', 'You were expecting...Sandy Claws?']`,
    txt: `
[' sand_king_4', 'You were expecting...Sandy Claws?'] -ch 780
`
  },
  {
    label: `[' sand_king_5', "It's good to be King!"]`,
    txt: `
[' sand_king_5', "It's good to be King!"] -ch 781
`
  },
  {
    label: `[' shadow_demon_laugh', 'Ha ha ha ha ha ha ha ha ha ha.']`,
    txt: `
[' shadow_demon_laugh', 'Ha ha ha ha ha ha ha ha ha ha.'] -ch 782
`
  },
  {
    label: `[' shadow_demon_thank', 'And they thought it could get no darker.']`,
    txt: `
[' shadow_demon_thank', 'And they thought it could get no darker.'] -ch 783
`
  },
  {
    label: `[' shadow_demon_deny', 'You conspired against me.']`,
    txt: `
[' shadow_demon_deny', 'You conspired against me.'] -ch 784
`
  },
  {
    label: `[' shadow_demon_1', "Izh vo'acha nesh."]`,
    txt: `
[' shadow_demon_1', "Izh vo'acha nesh."] -ch 785
`
  },
  {
    label: `[' shadow_demon_2', 'Fall before me!']`,
    txt: `
[' shadow_demon_2', 'Fall before me!'] -ch 786
`
  },
  {
    label: `[' shadow_demon_3', 'Just your bad luck.']`,
    txt: `
[' shadow_demon_3', 'Just your bad luck.'] -ch 787
`
  },
  {
    label: `[' shadow_demon_4', 'Bow down.']`,
    txt: `
[' shadow_demon_4', 'Bow down.'] -ch 788
`
  },
  {
    label: `[' shadow_demon_5', 'Cry some more.']`,
    txt: `
[' shadow_demon_5', 'Cry some more.'] -ch 789
`
  },
  {
    label: `[' shadow_shaman_laugh', 'Ha ha ha!']`,
    txt: `
[' shadow_shaman_laugh', 'Ha ha ha!'] -ch 798
`
  },
  {
    label: `[' shadow_shaman_thank', 'My prayers are answered.']`,
    txt: `
[' shadow_shaman_thank', 'My prayers are answered.'] -ch 799
`
  },
  {
    label: `[' shadow_shaman_deny', 'Bukaw, bukaw!']`,
    txt: `
[' shadow_shaman_deny', 'Bukaw, bukaw!'] -ch 800
`
  },
  {
    label: `[' shadow_shaman_1', 'I see for you a future full of death!']`,
    txt: `
[' shadow_shaman_1', 'I see for you a future full of death!'] -ch 801
`
  },
  {
    label: `[' shadow_shaman_2', "You're not going anywhere."]`,
    txt: `
[' shadow_shaman_2', "You're not going anywhere."] -ch 802
`
  },
  {
    label: `[' shadow_shaman_3', 'Heh ha ha hah, how refreshing!']`,
    txt: `
[' shadow_shaman_3', 'Heh ha ha hah, how refreshing!'] -ch 803
`
  },
  {
    label: `[' shadow_shaman_4', 'Tastes like chicken!']`,
    txt: `
[' shadow_shaman_4', 'Tastes like chicken!'] -ch 804
`
  },
  {
    label: `[' shadow_shaman_5', 'Au-mosu-atikanu!']`,
    txt: `
[' shadow_shaman_5', 'Au-mosu-atikanu!'] -ch 805
`
  },
  {
    label: `[' shredder_laugh', 'He he he he he!']`,
    txt: `
[' shredder_laugh', 'He he he he he!'] -ch 918
`
  },
  {
    label: `[' shredder_thank', 'I almost trust you.']`,
    txt: `
[' shredder_thank', 'I almost trust you.'] -ch 919
`
  },
  {
    label: `[' shredder_deny', 'You mad? Cuz I am!']`,
    txt: `
[' shredder_deny', 'You mad? Cuz I am!'] -ch 920
`
  },
  {
    label: `[' shredder_1', 'Oh yeah ha ha.']`,
    txt: `
[' shredder_1', 'Oh yeah ha ha.'] -ch 921
`
  },
  {
    label: `[' shredder_2', "Oh! Oh! Oh-oh-you see this? You see? Oh this is what I've always wanted! Oh I'm so happy!"]`,
    txt: `
[' shredder_2', "Oh! Oh! Oh-oh-you see this? You see? Oh this is what I've always wanted! Oh I'm so happy!"] -ch 922
`
  },
  {
    label: `[' shredder_3', "Oh god I think I'm going to be sick."]`,
    txt: `
[' shredder_3', "Oh god I think I'm going to be sick."] -ch 923
`
  },
  {
    label: `[' shredder_4', 'Saw that coming. Ha! Get it?']`,
    txt: `
[' shredder_4', 'Saw that coming. Ha! Get it?'] -ch 924
`
  },
  {
    label: `[' shredder_5', 'Run run run run runrunrunrunrunrunrunrunrunrunrunrunrunrunrunrunrunrun!']`,
    txt: `
[' shredder_5', 'Run run run run runrunrunrunrunrunrunrunrunrunrunrunrunrunrunrunrunrun!'] -ch 925
`
  },
  {
    label: `[' silencer_laugh', 'Ah ha ha.']`,
    txt: `
[' silencer_laugh', 'Ah ha ha.'] -ch 806
`
  },
  {
    label: `[' silencer_thank', 'The silence deepens.']`,
    txt: `
[' silencer_thank', 'The silence deepens.'] -ch 807
`
  },
  {
    label: `[' silencer_deny', 'You almost had that.']`,
    txt: `
[' silencer_deny', 'You almost had that.'] -ch 808
`
  },
  {
    label: `[' silencer_1', 'Calm yourselves.']`,
    txt: `
[' silencer_1', 'Calm yourselves.'] -ch 809
`
  },
  {
    label: `[' silencer_2', 'What a racket.']`,
    txt: `
[' silencer_2', 'What a racket.'] -ch 810
`
  },
  {
    label: `[' silencer_3', 'Silence, fool!']`,
    txt: `
[' silencer_3', 'Silence, fool!'] -ch 811
`
  },
  {
    label: `[' silencer_4', 'All for naught.']`,
    txt: `
[' silencer_4', 'All for naught.'] -ch 812
`
  },
  {
    label: `[' silencer_5', 'Shhh, did you hear something?']`,
    txt: `
[' silencer_5', 'Shhh, did you hear something?'] -ch 813
`
  },
  {
    label: `[' skeleton_king_laugh', 'AH HA HA HA HA!']`,
    txt: `
[' skeleton_king_laugh', 'AH HA HA HA HA!'] -ch 1070
`
  },
  {
    label: `[' skeleton_king_thank', "I'LL HELP MY WEAK AND PUNY ALLIES WHERE I CAN."]`,
    txt: `
[' skeleton_king_thank', "I'LL HELP MY WEAK AND PUNY ALLIES WHERE I CAN."] -ch 1071
`
  },
  {
    label: `[' skeleton_king_deny', 'SO WHAT IF I SWAGGER?']`,
    txt: `
[' skeleton_king_deny', 'SO WHAT IF I SWAGGER?'] -ch 1072
`
  },
  {
    label: `[' skeleton_king_1', 'TAKE A KNEE, PEASANT.']`,
    txt: `
[' skeleton_king_1', 'TAKE A KNEE, PEASANT.'] -ch 1073
`
  },
  {
    label: `[' skeleton_king_2', 'VERY NICE.']`,
    txt: `
[' skeleton_king_2', 'VERY NICE.'] -ch 1074
`
  },
  {
    label: `[' skeleton_king_3', 'I MISS MY BONES.']`,
    txt: `
[' skeleton_king_3', 'I MISS MY BONES.'] -ch 1075
`
  },
  {
    label: `[' skeleton_king_4', 'I NOW HAVE ALL THE SEXY.']`,
    txt: `
[' skeleton_king_4', 'I NOW HAVE ALL THE SEXY.'] -ch 1076
`
  },
  {
    label: `[' skeleton_king_5', "WELCOME TO ALL MY NEW SUBJECTS. NOW LET'S GET TO KNOW EACH OTHER."]`,
    txt: `
[' skeleton_king_5', "WELCOME TO ALL MY NEW SUBJECTS. NOW LET'S GET TO KNOW EACH OTHER."] -ch 1077
`
  },
  {
    label: `[' skywrath_mage_laugh', 'Ha ha!']`,
    txt: `
[' skywrath_mage_laugh', 'Ha ha!'] -ch 814
`
  },
  {
    label: `[' skywrath_mage_thank', 'I shall not report you.']`,
    txt: `
[' skywrath_mage_thank', 'I shall not report you.'] -ch 815
`
  },
  {
    label: `[' skywrath_mage_deny', 'Down you go!']`,
    txt: `
[' skywrath_mage_deny', 'Down you go!'] -ch 816
`
  },
  {
    label: `[' skywrath_mage_1', 'Ai, me!']`,
    txt: `
[' skywrath_mage_1', 'Ai, me!'] -ch 817
`
  },
  {
    label: `[' skywrath_mage_2', 'That my friend was a mistake.']`,
    txt: `
[' skywrath_mage_2', 'That my friend was a mistake.'] -ch 818
`
  },
  {
    label: `[' skywrath_mage_3', 'Twas honorably done.']`,
    txt: `
[' skywrath_mage_3', 'Twas honorably done.'] -ch 819
`
  },
  {
    label: `[' skywrath_mage_5', 'The skies are dark with Skywrath power!']`,
    txt: `
[' skywrath_mage_5', 'The skies are dark with Skywrath power!'] -ch 820
`
  },
  {
    label: `[' slardar_laugh', 'Heh heeh heh hah hah ha hah hah!']`,
    txt: `
[' slardar_laugh', 'Heh heeh heh hah hah ha hah hah!'] -ch 822
`
  },
  {
    label: `[' slardar_thank', 'Total spawnage.']`,
    txt: `
[' slardar_thank', 'Total spawnage.'] -ch 823
`
  },
  {
    label: `[' slardar_deny', 'My deepest sympathies.']`,
    txt: `
[' slardar_deny', 'My deepest sympathies.'] -ch 824
`
  },
  {
    label: `[' slardar_1', 'I came a long way to see you die.']`,
    txt: `
[' slardar_1', 'I came a long way to see you die.'] -ch 825
`
  },
  {
    label: `[' slardar_2', "You won't escape."]`,
    txt: `
[' slardar_2', "You won't escape."] -ch 826
`
  },
  {
    label: `[' slardar_3', "Jig's up."]`,
    txt: `
[' slardar_3', "Jig's up."] -ch 827
`
  },
  {
    label: `[' slardar_4', 'You were out of your depth.']`,
    txt: `
[' slardar_4', 'You were out of your depth.'] -ch 828
`
  },
  {
    label: `[' slardar_5', 'Oh, how the deep ones will feast!']`,
    txt: `
[' slardar_5', 'Oh, how the deep ones will feast!'] -ch 829
`
  },
  {
    label: `[' slark_laugh', 'Heh heh heh heh heh heh heh heh.']`,
    txt: `
[' slark_laugh', 'Heh heh heh heh heh heh heh heh.'] -ch 830
`
  },
  {
    label: `[' slark_thank', 'I know I can trust you guys.']`,
    txt: `
[' slark_thank', 'I know I can trust you guys.'] -ch 831
`
  },
  {
    label: `[' slark_deny', 'On your belly and crawl.']`,
    txt: `
[' slark_deny', 'On your belly and crawl.'] -ch 832
`
  },
  {
    label: `[' slark_1', "I can't hear you."]`,
    txt: `
[' slark_1', "I can't hear you."] -ch 833
`
  },
  {
    label: `[' slark_2', 'Well that went bad quickly.']`,
    txt: `
[' slark_2', 'Well that went bad quickly.'] -ch 834
`
  },
  {
    label: `[' slark_3', 'You took the bait.']`,
    txt: `
[' slark_3', 'You took the bait.'] -ch 835
`
  },
  {
    label: `[' slark_4', 'Oh this makes it all worthwhile.']`,
    txt: `
[' slark_4', 'Oh this makes it all worthwhile.'] -ch 836
`
  },
  {
    label: `[' slark_5', "Oh that's very nice."]`,
    txt: `
[' slark_5', "Oh that's very nice."] -ch 837
`
  },
  {
    label: `[' snapfire_laugh', '', '', 'Woohoohoo ha ha ha!']`,
    txt: `
[' snapfire_laugh', '', '', 'Woohoohoo ha ha ha!'] -ch 838
`
  },
  {
    label: `[' snapfire_thank', '', '', 'Why thank you!']`,
    txt: `
[' snapfire_thank', '', '', 'Why thank you!'] -ch 839
`
  },
  {
    label: `[' snapfire_deny', '', '', 'Yeee-haw!']`,
    txt: `
[' snapfire_deny', '', '', 'Yeee-haw!'] -ch 840
`
  },
  {
    label: `[' snapfire_1', '', '', ' Who wants cookies? Well too bad!']`,
    txt: `
[' snapfire_1', '', '', ' Who wants cookies? Well too bad!'] -ch 841
`
  },
  {
    label: `[' snapfire_2', '', '', " Don't you sass me."]`,
    txt: `
[' snapfire_2', '', '', " Don't you sass me."] -ch 842
`
  },
  {
    label: `[' snapfire_3', '', '', " There's too many darn wizards!"]`,
    txt: `
[' snapfire_3', '', '', " There's too many darn wizards!"] -ch 843
`
  },
  {
    label: `[' snapfire_4', '', '', " I won't eat you, dear. But Mortimer might."]`,
    txt: `
[' snapfire_4', '', '', " I won't eat you, dear. But Mortimer might."] -ch 844
`
  },
  {
    label: `[' snapfire_5', '', '', " You lookin' for cookin' tips, violence, or both?"]`,
    txt: `
[' snapfire_5', '', '', " You lookin' for cookin' tips, violence, or both?"] -ch 845
`
  },
  {
    label: `[' sniper_laugh', 'Hee hee hee hee hee hee hee hee hee hee!']`,
    txt: `
[' sniper_laugh', 'Hee hee hee hee hee hee hee hee hee hee!'] -ch 846
`
  },
  {
    label: `[' sniper_thank', "Target practice, payin' off!"]`,
    txt: `
[' sniper_thank', "Target practice, payin' off!"] -ch 847
`
  },
  {
    label: `[' sniper_deny', 'What the---?']`,
    txt: `
[' sniper_deny', 'What the---?'] -ch 848
`
  },
  {
    label: `[' sniper_1', 'Say goodbye to your head!']`,
    txt: `
[' sniper_1', 'Say goodbye to your head!'] -ch 849
`
  },
  {
    label: `[' sniper_2', 'Dance! Ha ha ha ha! Dance!']`,
    txt: `
[' sniper_2', 'Dance! Ha ha ha ha! Dance!'] -ch 850
`
  },
  {
    label: `[' sniper_3', 'Why am I smiling? This is what trigger-happy looks like.']`,
    txt: `
[' sniper_3', 'Why am I smiling? This is what trigger-happy looks like.'] -ch 851
`
  },
  {
    label: `[' sniper_4', 'What a dum-dum!']`,
    txt: `
[' sniper_4', 'What a dum-dum!'] -ch 852
`
  },
  {
    label: `[' sniper_5', 'Ho ho ha ha!']`,
    txt: `
[' sniper_5', 'Ho ho ha ha!'] -ch 853
`
  },
  {
    label: `[' spectre_laugh', 'Ha ha ha ha ha ha ha ha ha!']`,
    txt: `
[' spectre_laugh', 'Ha ha ha ha ha ha ha ha ha!'] -ch 854
`
  },
  {
    label: `[' spectre_thank', "I'll stand by you."]`,
    txt: `
[' spectre_thank', "I'll stand by you."] -ch 855
`
  },
  {
    label: `[' spectre_deny', 'Wrong.']`,
    txt: `
[' spectre_deny', 'Wrong.'] -ch 856
`
  },
  {
    label: `[' spectre_1', 'I do not understand.']`,
    txt: `
[' spectre_1', 'I do not understand.'] -ch 857
`
  },
  {
    label: `[' spectre_2', 'What is this?']`,
    txt: `
[' spectre_2', 'What is this?'] -ch 858
`
  },
  {
    label: `[' spectre_3', 'A useful skill.']`,
    txt: `
[' spectre_3', 'A useful skill.'] -ch 859
`
  },
  {
    label: `[' spectre_4', 'Can no one understand me?']`,
    txt: `
[' spectre_4', 'Can no one understand me?'] -ch 860
`
  },
  {
    label: `[' spectre_5', 'Miserable and ignorant.']`,
    txt: `
[' spectre_5', 'Miserable and ignorant.'] -ch 861
`
  },
  {
    label: `[' spirit_breaker_laugh', 'Whoheheheahahah.']`,
    txt: `
[' spirit_breaker_laugh', 'Whoheheheahahah.'] -ch 862
`
  },
  {
    label: `[' spirit_breaker_thank', "Hah, it's all coming together!"]`,
    txt: `
[' spirit_breaker_thank', "Hah, it's all coming together!"] -ch 863
`
  },
  {
    label: `[' spirit_breaker_deny', "Stunning, isn't it?"]`,
    txt: `
[' spirit_breaker_deny', "Stunning, isn't it?"] -ch 864
`
  },
  {
    label: `[' spirit_breaker_1', 'My patience is rewarded.']`,
    txt: `
[' spirit_breaker_1', 'My patience is rewarded.'] -ch 865
`
  },
  {
    label: `[' spirit_breaker_2', "There's no escaping me."]`,
    txt: `
[' spirit_breaker_2', "There's no escaping me."] -ch 866
`
  },
  {
    label: `[' spirit_breaker_3', 'This is complete and utter bullshit!']`,
    txt: `
[' spirit_breaker_3', 'This is complete and utter bullshit!'] -ch 867
`
  },
  {
    label: `[' spirit_breaker_4', "That's the spirit."]`,
    txt: `
[' spirit_breaker_4', "That's the spirit."] -ch 868
`
  },
  {
    label: `[' spirit_breaker_5', 'That did not go as expected.']`,
    txt: `
[' spirit_breaker_5', 'That did not go as expected.'] -ch 869
`
  },
  {
    label: `[' storm_spirit_laugh', 'Hm hm hm hm hee hee hee ha ha.']`,
    txt: `
[' storm_spirit_laugh', 'Hm hm hm hm hee hee hee ha ha.'] -ch 870
`
  },
  {
    label: `[' storm_spirit_thank', "That's the spirit!"]`,
    txt: `
[' storm_spirit_thank', "That's the spirit!"] -ch 871
`
  },
  {
    label: `[' storm_spirit_deny', 'You blew it!']`,
    txt: `
[' storm_spirit_deny', 'You blew it!'] -ch 872
`
  },
  {
    label: `[' storm_spirit_1', 'I love this part!']`,
    txt: `
[' storm_spirit_1', 'I love this part!'] -ch 873
`
  },
  {
    label: `[' storm_spirit_2', 'Lookin for me?']`,
    txt: `
[' storm_spirit_2', 'Lookin for me?'] -ch 874
`
  },
  {
    label: `[' storm_spirit_3', 'Told you a storm was coming!']`,
    txt: `
[' storm_spirit_3', 'Told you a storm was coming!'] -ch 875
`
  },
  {
    label: `[' storm_spirit_4', 'Looking good!']`,
    txt: `
[' storm_spirit_4', 'Looking good!'] -ch 876
`
  },
  {
    label: `[' storm_spirit_5', 'Glorious!']`,
    txt: `
[' storm_spirit_5', 'Glorious!'] -ch 877
`
  },
  {
    label: `[' sven_laugh', 'Ahh ha ha ha! Ha ha ha ha!']`,
    txt: `
[' sven_laugh', 'Ahh ha ha ha! Ha ha ha ha!'] -ch 878
`
  },
  {
    label: `[' sven_thank', 'You are a true friend.']`,
    txt: `
[' sven_thank', 'You are a true friend.'] -ch 879
`
  },
  {
    label: `[' sven_deny', 'You look stunned.']`,
    txt: `
[' sven_deny', 'You look stunned.'] -ch 880
`
  },
  {
    label: `[' sven_1', 'Rogue Knight claims another.']`,
    txt: `
[' sven_1', 'Rogue Knight claims another.'] -ch 881
`
  },
  {
    label: `[' sven_2', 'You deserved it.']`,
    txt: `
[' sven_2', 'You deserved it.'] -ch 882
`
  },
  {
    label: `[' sven_3', 'My honor compels me...to gloat.']`,
    txt: `
[' sven_3', 'My honor compels me...to gloat.'] -ch 883
`
  },
  {
    label: `[' sven_4', 'An expected outcome.']`,
    txt: `
[' sven_4', 'An expected outcome.'] -ch 884
`
  },
  {
    label: `[' sven_5', 'Hm...now what do we learn from this.']`,
    txt: `
[' sven_5', 'Hm...now what do we learn from this.'] -ch 885
`
  },
  {
    label: `[' techies_laugh', 'He he he, hehe ah ha! Oh ho ho oh oh ha ha ha!']`,
    txt: `
[' techies_laugh', 'He he he, hehe ah ha! Oh ho ho oh oh ha ha ha!'] -ch 886
`
  },
  {
    label: `[' techies_thank', 'Fun! Huhuhu!']`,
    txt: `
[' techies_thank', 'Fun! Huhuhu!'] -ch 887
`
  },
  {
    label: `[' techies_deny', "I was told there'd be a mushroom cloud!"]`,
    txt: `
[' techies_deny', "I was told there'd be a mushroom cloud!"] -ch 888
`
  },
  {
    label: `[' techies_1', 'Oh crap!']`,
    txt: `
[' techies_1', 'Oh crap!'] -ch 889
`
  },
  {
    label: `[' techies_2', "Where'd he go? Everywhere!"]`,
    txt: `
[' techies_2', "Where'd he go? Everywhere!"] -ch 890
`
  },
  {
    label: `[' techies_3', 'Gotcha!']`,
    txt: `
[' techies_3', 'Gotcha!'] -ch 891
`
  },
  {
    label: `[' techies_4', 'Just have a seat right over there. And let the smart people work.']`,
    txt: `
[' techies_4', 'Just have a seat right over there. And let the smart people work.'] -ch 892
`
  },
  {
    label: `[' techies_5', "I can't believe that worked."]`,
    txt: `
[' techies_5', "I can't believe that worked."] -ch 893
`
  },
  {
    label: `[' templar_assassin_laugh', 'Ha ha ha ha ha ha ha!']`,
    txt: `
[' templar_assassin_laugh', 'Ha ha ha ha ha ha ha!'] -ch 894
`
  },
  {
    label: `[' templar_assassin_thank', "I'll take it."]`,
    txt: `
[' templar_assassin_thank', "I'll take it."] -ch 895
`
  },
  {
    label: `[' templar_assassin_deny', 'I saw that ending from miles away.']`,
    txt: `
[' templar_assassin_deny', 'I saw that ending from miles away.'] -ch 896
`
  },
  {
    label: `[' templar_assassin_1', "They'll never find your grave."]`,
    txt: `
[' templar_assassin_1', "They'll never find your grave."] -ch 897
`
  },
  {
    label: `[' templar_assassin_2', "It's a trap!"]`,
    txt: `
[' templar_assassin_2', "It's a trap!"] -ch 898
`
  },
  {
    label: `[' templar_assassin_3', 'The mystery deepens.']`,
    txt: `
[' templar_assassin_3', 'The mystery deepens.'] -ch 899
`
  },
  {
    label: `[' templar_assassin_4', 'Oh, snap!']`,
    txt: `
[' templar_assassin_4', 'Oh, snap!'] -ch 900
`
  },
  {
    label: `[' templar_assassin_5', 'Feed me if you must.']`,
    txt: `
[' templar_assassin_5', 'Feed me if you must.'] -ch 901
`
  },
  {
    label: `[' terrorblade_laugh', 'Hehahahahahh.']`,
    txt: `
[' terrorblade_laugh', 'Hehahahahahh.'] -ch 902
`
  },
  {
    label: `[' terrorblade_thank', 'What a handsome devil.']`,
    txt: `
[' terrorblade_thank', 'What a handsome devil.'] -ch 903
`
  },
  {
    label: `[' terrorblade_deny', "Oh, they're gonna hate me for this."]`,
    txt: `
[' terrorblade_deny', "Oh, they're gonna hate me for this."] -ch 904
`
  },
  {
    label: `[' terrorblade_1', 'Trick of the trade.']`,
    txt: `
[' terrorblade_1', 'Trick of the trade.'] -ch 905
`
  },
  {
    label: `[' terrorblade_2', 'Your own worst enemy.']`,
    txt: `
[' terrorblade_2', 'Your own worst enemy.'] -ch 906
`
  },
  {
    label: `[' terrorblade_3', "Perhaps that wasn't wise."]`,
    txt: `
[' terrorblade_3', "Perhaps that wasn't wise."] -ch 907
`
  },
  {
    label: `[' terrorblade_4', "A wise blade takes a fool's life."]`,
    txt: `
[' terrorblade_4', "A wise blade takes a fool's life."] -ch 908
`
  },
  {
    label: `[' terrorblade_5', 'Fight me, cowards!']`,
    txt: `
[' terrorblade_5', 'Fight me, cowards!'] -ch 909
`
  },
  {
    label: `[' tidehunter_laugh', 'Ah ha ha ha!']`,
    txt: `
[' tidehunter_laugh', 'Ah ha ha ha!'] -ch 910
`
  },
  {
    label: `[' tidehunter_thank', "We'll turn this tide to our advantage."]`,
    txt: `
[' tidehunter_thank', "We'll turn this tide to our advantage."] -ch 911
`
  },
  {
    label: `[' tidehunter_deny', 'You look ravaged.']`,
    txt: `
[' tidehunter_deny', 'You look ravaged.'] -ch 912
`
  },
  {
    label: `[' tidehunter_1', "Ha ha ha ha ha ha, Now you're fish food."]`,
    txt: `
[' tidehunter_1', "Ha ha ha ha ha ha, Now you're fish food."] -ch 913
`
  },
  {
    label: `[' tidehunter_2', 'Ha ha I could eat a walrus.']`,
    txt: `
[' tidehunter_2', 'Ha ha I could eat a walrus.'] -ch 914
`
  },
  {
    label: `[' tidehunter_3', 'Put a cork in it.']`,
    txt: `
[' tidehunter_3', 'Put a cork in it.'] -ch 915
`
  },
  {
    label: `[' tidehunter_4', "Did you think I'd blunder? You must have mistaken me for Kunkka."]`,
    txt: `
[' tidehunter_4', "Did you think I'd blunder? You must have mistaken me for Kunkka."] -ch 916
`
  },
  {
    label: `[' tidehunter_5', "Who needs a big brain when you've got teeth like mine?"]`,
    txt: `
[' tidehunter_5', "Who needs a big brain when you've got teeth like mine?"] -ch 917
`
  },
  {
    label: `[' tinker_laugh', 'Ah ha ha ha ha!']`,
    txt: `
[' tinker_laugh', 'Ah ha ha ha ha!'] -ch 926
`
  },
  {
    label: `[' tinker_thank', 'Your talents surpass your loveliness.']`,
    txt: `
[' tinker_thank', 'Your talents surpass your loveliness.'] -ch 927
`
  },
  {
    label: `[' tinker_deny', "Well isn't that something!"]`,
    txt: `
[' tinker_deny', "Well isn't that something!"] -ch 928
`
  },
  {
    label: `[' tinker_1', 'Pew, pew, pew pew pew!']`,
    txt: `
[' tinker_1', 'Pew, pew, pew pew pew!'] -ch 929
`
  },
  {
    label: `[' tinker_2', 'I predicted all of this you know, all of it!']`,
    txt: `
[' tinker_2', 'I predicted all of this you know, all of it!'] -ch 930
`
  },
  {
    label: `[' tinker_3', 'That was genius!']`,
    txt: `
[' tinker_3', 'That was genius!'] -ch 931
`
  },
  {
    label: `[' tinker_4', "I'm going to call that experiment, a failure."]`,
    txt: `
[' tinker_4', "I'm going to call that experiment, a failure."] -ch 932
`
  },
  {
    label: `[' tinker_5', 'You can keep your magic, I have laser beams!']`,
    txt: `
[' tinker_5', 'You can keep your magic, I have laser beams!'] -ch 933
`
  },
  {
    label: `[' tiny_laugh', 'Hehehehehuhhehehe.']`,
    txt: `
[' tiny_laugh', 'Hehehehehuhhehehe.'] -ch 934
`
  },
  {
    label: `[' tiny_thank', 'Are you ready to rubble?']`,
    txt: `
[' tiny_thank', 'Are you ready to rubble?'] -ch 935
`
  },
  {
    label: `[' tiny_deny', 'Well, look at that.']`,
    txt: `
[' tiny_deny', 'Well, look at that.'] -ch 936
`
  },
  {
    label: `[' tiny_1', 'Rock em, sock em!']`,
    txt: `
[' tiny_1', 'Rock em, sock em!'] -ch 937
`
  },
  {
    label: `[' tiny_2', 'You got rocks in your head.']`,
    txt: `
[' tiny_2', 'You got rocks in your head.'] -ch 938
`
  },
  {
    label: `[' tiny_3', 'My apologies.']`,
    txt: `
[' tiny_3', 'My apologies.'] -ch 939
`
  },
  {
    label: `[' tiny_4', "You haven't got the stones."]`,
    txt: `
[' tiny_4', "You haven't got the stones."] -ch 940
`
  },
  {
    label: `[' tiny_5', "It's hard to be this good."]`,
    txt: `
[' tiny_5', "It's hard to be this good."] -ch 941
`
  },
  {
    label: `[' treant_laugh', 'Ah ho ho ho hoooo ho ho ho hm hm hm.']`,
    txt: `
[' treant_laugh', 'Ah ho ho ho hoooo ho ho ho hm hm hm.'] -ch 942
`
  },
  {
    label: `[' treant_thank', "I'm really freaking out."]`,
    txt: `
[' treant_thank', "I'm really freaking out."] -ch 943
`
  },
  {
    label: `[' treant_deny', "That's what happens when I rush."]`,
    txt: `
[' treant_deny', "That's what happens when I rush."] -ch 944
`
  },
  {
    label: `[' treant_1', 'Are you lost?']`,
    txt: `
[' treant_1', 'Are you lost?'] -ch 945
`
  },
  {
    label: `[' treant_2', 'Careful.']`,
    txt: `
[' treant_2', 'Careful.'] -ch 946
`
  },
  {
    label: `[' treant_3', 'Trees can be ferocious if provoked.']`,
    txt: `
[' treant_3', 'Trees can be ferocious if provoked.'] -ch 947
`
  },
  {
    label: `[' treant_4', 'Ah, fresh fertilizer.']`,
    txt: `
[' treant_4', 'Ah, fresh fertilizer.'] -ch 948
`
  },
  {
    label: `[' treant_5', 'Mmm? What happened?']`,
    txt: `
[' treant_5', 'Mmm? What happened?'] -ch 949
`
  },
  {
    label: `[' troll_warlord_laugh', 'Yaaahahahaahhah.']`,
    txt: `
[' troll_warlord_laugh', 'Yaaahahahaahhah.'] -ch 950
`
  },
  {
    label: `[' troll_warlord_thank', 'Go crazy!']`,
    txt: `
[' troll_warlord_thank', 'Go crazy!'] -ch 951
`
  },
  {
    label: `[' troll_warlord_deny', 'Unfortunate.']`,
    txt: `
[' troll_warlord_deny', 'Unfortunate.'] -ch 952
`
  },
  {
    label: `[' troll_warlord_1', 'Come back and die again.']`,
    txt: `
[' troll_warlord_1', 'Come back and die again.'] -ch 953
`
  },
  {
    label: `[' troll_warlord_2', "You've got to be kidding."]`,
    txt: `
[' troll_warlord_2', "You've got to be kidding."] -ch 954
`
  },
  {
    label: `[' troll_warlord_3', 'Try not to feed.']`,
    txt: `
[' troll_warlord_3', 'Try not to feed.'] -ch 955
`
  },
  {
    label: `[' troll_warlord_4', "This can't be happening."]`,
    txt: `
[' troll_warlord_4', "This can't be happening."] -ch 956
`
  },
  {
    label: `[' troll_warlord_5', "Why doesn't anybody like me?"]`,
    txt: `
[' troll_warlord_5', "Why doesn't anybody like me?"] -ch 957
`
  },
  {
    label: `[' tusk_laugh', 'Oh boy! Ha ha ha ha ha!']`,
    txt: `
[' tusk_laugh', 'Oh boy! Ha ha ha ha ha!'] -ch 958
`
  },
  {
    label: `[' tusk_thank', 'Fist Bump.']`,
    txt: `
[' tusk_thank', 'Fist Bump.'] -ch 959
`
  },
  {
    label: `[' tusk_deny', 'Well I tried.']`,
    txt: `
[' tusk_deny', 'Well I tried.'] -ch 960
`
  },
  {
    label: `[' tusk_1', 'Are you okay?']`,
    txt: `
[' tusk_1', 'Are you okay?'] -ch 961
`
  },
  {
    label: `[' tusk_2', 'Dohmvzm!']`,
    txt: `
[' tusk_2', 'Dohmvzm!'] -ch 962
`
  },
  {
    label: `[' tusk_3', 'Tusky-duskie.']`,
    txt: `
[' tusk_3', 'Tusky-duskie.'] -ch 963
`
  },
  {
    label: `[' tusk_4', 'Oh, that had to hurt!']`,
    txt: `
[' tusk_4', 'Oh, that had to hurt!'] -ch 964
`
  },
  {
    label: `[' tusk_5', 'That was a big ball of failure.']`,
    txt: `
[' tusk_5', 'That was a big ball of failure.'] -ch 965
`
  },
  {
    label: `[' abyssal_underlord_laugh', 'Ah ha ha ha ha ha ha ha ha!']`,
    txt: `
[' abyssal_underlord_laugh', 'Ah ha ha ha ha ha ha ha ha!'] -ch 966
`
  },
  {
    label: `[' abyssal_underlord_thank', 'I do not thank.']`,
    txt: `
[' abyssal_underlord_thank', 'I do not thank.'] -ch 967
`
  },
  {
    label: `[' abyssal_underlord_deny', 'Curses!']`,
    txt: `
[' abyssal_underlord_deny', 'Curses!'] -ch 968
`
  },
  {
    label: `[' abyssal_underlord_1', 'Oh yes.']`,
    txt: `
[' abyssal_underlord_1', 'Oh yes.'] -ch 969
`
  },
  {
    label: `[' abyssal_underlord_2', 'Insignificant.']`,
    txt: `
[' abyssal_underlord_2', 'Insignificant.'] -ch 970
`
  },
  {
    label: `[' abyssal_underlord_3', 'Bow to your new lord.']`,
    txt: `
[' abyssal_underlord_3', 'Bow to your new lord.'] -ch 971
`
  },
  {
    label: `[' abyssal_underlord_4', 'There is no hope.']`,
    txt: `
[' abyssal_underlord_4', 'There is no hope.'] -ch 972
`
  },
  {
    label: `[' abyssal_underlord_5', 'Hold on to your butts.']`,
    txt: `
[' abyssal_underlord_5', 'Hold on to your butts.'] -ch 973
`
  },
  {
    label: `[' undying_laugh', 'Heh heh heh heh ha ha ha ha ha ha ha ha ha ha!']`,
    txt: `
[' undying_laugh', 'Heh heh heh heh ha ha ha ha ha ha ha ha ha ha!'] -ch 974
`
  },
  {
    label: `[' undying_thank', 'Tktktk sing your praises.']`,
    txt: `
[' undying_thank', 'Tktktk sing your praises.'] -ch 975
`
  },
  {
    label: `[' undying_deny', 'The maggots clean you.']`,
    txt: `
[' undying_deny', 'The maggots clean you.'] -ch 976
`
  },
  {
    label: `[' undying_1', 'I hate life.']`,
    txt: `
[' undying_1', 'I hate life.'] -ch 977
`
  },
  {
    label: `[' undying_2', 'I need… gummy vitamins.']`,
    txt: `
[' undying_2', 'I need… gummy vitamins.'] -ch 978
`
  },
  {
    label: `[' undying_3', 'No hells. No heavens. Only this.']`,
    txt: `
[' undying_3', 'No hells. No heavens. Only this.'] -ch 979
`
  },
  {
    label: `[' undying_4', 'Not feed.']`,
    txt: `
[' undying_4', 'Not feed.'] -ch 980
`
  },
  {
    label: `[' undying_5', 'No brains.']`,
    txt: `
[' undying_5', 'No brains.'] -ch 981
`
  },
  {
    label: `[' ursa_laugh', 'Hah! Hah! Hah-hah-hah!']`,
    txt: `
[' ursa_laugh', 'Hah! Hah! Hah-hah-hah!'] -ch 982
`
  },
  {
    label: `[' ursa_thank', 'Is it spring already?']`,
    txt: `
[' ursa_thank', 'Is it spring already?'] -ch 983
`
  },
  {
    label: `[' ursa_deny', 'A loss so small, the world will hardly notice.']`,
    txt: `
[' ursa_deny', 'A loss so small, the world will hardly notice.'] -ch 984
`
  },
  {
    label: `[' ursa_1', 'A poor defense.']`,
    txt: `
[' ursa_1', 'A poor defense.'] -ch 985
`
  },
  {
    label: `[' ursa_2', 'Fuzzy Wuzzy!']`,
    txt: `
[' ursa_2', 'Fuzzy Wuzzy!'] -ch 986
`
  },
  {
    label: `[' ursa_3', 'How is it you heard not my warnings?']`,
    txt: `
[' ursa_3', 'How is it you heard not my warnings?'] -ch 987
`
  },
  {
    label: `[' ursa_4', 'Sweet as honey.']`,
    txt: `
[' ursa_4', 'Sweet as honey.'] -ch 988
`
  },
  {
    label: `[' ursa_5', 'Mtlap tlap, not bad! Sllleup tlap tlap tlap.']`,
    txt: `
[' ursa_5', 'Mtlap tlap, not bad! Sllleup tlap tlap tlap.'] -ch 989
`
  },
  {
    label: `[' vengefulspirit_laugh', 'Hm ha ha ha ha ha ha!']`,
    txt: `
[' vengefulspirit_laugh', 'Hm ha ha ha ha ha ha!'] -ch 990
`
  },
  {
    label: `[' vengefulspirit_thank', 'So sweet...']`,
    txt: `
[' vengefulspirit_thank', 'So sweet...'] -ch 991
`
  },
  {
    label: `[' vengefulspirit_deny', 'What...?']`,
    txt: `
[' vengefulspirit_deny', 'What...?'] -ch 992
`
  },
  {
    label: `[' vengefulspirit_1', 'I feel better already.']`,
    txt: `
[' vengefulspirit_1', 'I feel better already.'] -ch 993
`
  },
  {
    label: `[' vengefulspirit_2', 'Swapsies!']`,
    txt: `
[' vengefulspirit_2', 'Swapsies!'] -ch 994
`
  },
  {
    label: `[' vengefulspirit_3', 'Mwahahhahahahahahaha!']`,
    txt: `
[' vengefulspirit_3', 'Mwahahhahahahahahaha!'] -ch 995
`
  },
  {
    label: `[' vengefulspirit_4', 'Prepare for the wave of terror: boo!']`,
    txt: `
[' vengefulspirit_4', 'Prepare for the wave of terror: boo!'] -ch 996
`
  },
  {
    label: `[' vengefulspirit_5', 'The pain of my enemies is the only pleasure left to me.']`,
    txt: `
[' vengefulspirit_5', 'The pain of my enemies is the only pleasure left to me.'] -ch 997
`
  },
  {
    label: `[' venomancer_laugh', 'Sss eh he he he he.']`,
    txt: `
[' venomancer_laugh', 'Sss eh he he he he.'] -ch 998
`
  },
  {
    label: `[' venomancer_thank', 'Plague our enemies!']`,
    txt: `
[' venomancer_thank', 'Plague our enemies!'] -ch 999
`
  },
  {
    label: `[' venomancer_deny', 'Oh, costly.']`,
    txt: `
[' venomancer_deny', 'Oh, costly.'] -ch 1000
`
  },
  {
    label: `[' venomancer_1', 'Nothing touches the heart like my venom.']`,
    txt: `
[' venomancer_1', 'Nothing touches the heart like my venom.'] -ch 1001
`
  },
  {
    label: `[' venomancer_2', 'Ssss, that burns.']`,
    txt: `
[' venomancer_2', 'Ssss, that burns.'] -ch 1002
`
  },
  {
    label: `[' venomancer_3', "You can't run from the venomous one!"]`,
    txt: `
[' venomancer_3', "You can't run from the venomous one!"] -ch 1003
`
  },
  {
    label: `[' venomancer_4', 'I owe it all to me.']`,
    txt: `
[' venomancer_4', 'I owe it all to me.'] -ch 1004
`
  },
  {
    label: `[' venomancer_5', 'Ah, sweet toxicity!']`,
    txt: `
[' venomancer_5', 'Ah, sweet toxicity!'] -ch 1005
`
  },
  {
    label: `[' viper_laugh', 'Tehehehehar.']`,
    txt: `
[' viper_laugh', 'Tehehehehar.'] -ch 1006
`
  },
  {
    label: `[' viper_thank', 'Air support arrives.']`,
    txt: `
[' viper_thank', 'Air support arrives.'] -ch 1007
`
  },
  {
    label: `[' viper_deny', 'Close but not quite.']`,
    txt: `
[' viper_deny', 'Close but not quite.'] -ch 1008
`
  },
  {
    label: `[' viper_1', 'Death...from above.']`,
    txt: `
[' viper_1', 'Death...from above.'] -ch 1009
`
  },
  {
    label: `[' viper_2', 'I fly into a rage.']`,
    txt: `
[' viper_2', 'I fly into a rage.'] -ch 1010
`
  },
  {
    label: `[' viper_3', 'There are better deaths.']`,
    txt: `
[' viper_3', 'There are better deaths.'] -ch 1011
`
  },
  {
    label: `[' viper_4', "Burns...doesn't it."]`,
    txt: `
[' viper_4', "Burns...doesn't it."] -ch 1012
`
  },
  {
    label: `[' viper_5', 'Who needs legs, when you got wings?']`,
    txt: `
[' viper_5', 'Who needs legs, when you got wings?'] -ch 1013
`
  },
  {
    label: `[' visage_laugh', 'Ah ha ha ha ha ha ha ha ha!']`,
    txt: `
[' visage_laugh', 'Ah ha ha ha ha ha ha ha ha!'] -ch 1014
`
  },
  {
    label: `[' visage_thank', 'Visage like.']`,
    txt: `
[' visage_thank', 'Visage like.'] -ch 1015
`
  },
  {
    label: `[' visage_deny', 'You again?']`,
    txt: `
[' visage_deny', 'You again?'] -ch 1016
`
  },
  {
    label: `[' visage_1', 'And so you die.']`,
    txt: `
[' visage_1', 'And so you die.'] -ch 1017
`
  },
  {
    label: `[' visage_2', 'I have failed.']`,
    txt: `
[' visage_2', 'I have failed.'] -ch 1018
`
  },
  {
    label: `[' visage_3', 'You shall not pass!']`,
    txt: `
[' visage_3', 'You shall not pass!'] -ch 1019
`
  },
  {
    label: `[' visage_4', 'Face of death.']`,
    txt: `
[' visage_4', 'Face of death.'] -ch 1020
`
  },
  {
    label: `[' visage_5', 'Ahh this is much better.']`,
    txt: `
[' visage_5', 'Ahh this is much better.'] -ch 1021
`
  },
  {
    label: `[' void_spirit_laugh', '', ' Hn ha ha ha ha ha.']`,
    txt: `
[' void_spirit_laugh', '', ' Hn ha ha ha ha ha.'] -ch 1022
`
  },
  {
    label: `[' void_spirit_thank', '', ' This pleases me to no end.']`,
    txt: `
[' void_spirit_thank', '', ' This pleases me to no end.'] -ch 1023
`
  },
  {
    label: `[' void_spirit_deny', '', ' I sense...distortions in the void.']`,
    txt: `
[' void_spirit_deny', '', ' I sense...distortions in the void.'] -ch 1024
`
  },
  {
    label: `[' void_spirit_1', '', '', 'Your anger is useless here.']`,
    txt: `
[' void_spirit_1', '', '', 'Your anger is useless here.'] -ch 1025
`
  },
  {
    label: `[' void_spirit_2', '', '', 'Rest easy, child.']`,
    txt: `
[' void_spirit_2', '', '', 'Rest easy, child.'] -ch 1026
`
  },
  {
    label: `[' void_spirit_3', '', '', 'Such a limited imagination you have.']`,
    txt: `
[' void_spirit_3', '', '', 'Such a limited imagination you have.'] -ch 1027
`
  },
  {
    label: `[' void_spirit_4', '', '', 'Living things die.']`,
    txt: `
[' void_spirit_4', '', '', 'Living things die.'] -ch 1028
`
  },
  {
    label: `[' void_spirit_5', '', '', 'How can you carry hope in the face of the void?']`,
    txt: `
[' void_spirit_5', '', '', 'How can you carry hope in the face of the void?'] -ch 1029
`
  },
  {
    label: `[' warlock_laugh', 'Ho ha ha ha ha ha ha ha ha!']`,
    txt: `
[' warlock_laugh', 'Ho ha ha ha ha ha ha ha ha!'] -ch 1030
`
  },
  {
    label: `[' warlock_thank', 'Let chaos reign!']`,
    txt: `
[' warlock_thank', 'Let chaos reign!'] -ch 1031
`
  },
  {
    label: `[' warlock_deny', 'Really? You just did that?']`,
    txt: `
[' warlock_deny', 'Really? You just did that?'] -ch 1032
`
  },
  {
    label: `[' warlock_1', 'I feed you to my fiends.']`,
    txt: `
[' warlock_1', 'I feed you to my fiends.'] -ch 1033
`
  },
  {
    label: `[' warlock_2', 'Zan korobos kor koramord!']`,
    txt: `
[' warlock_2', 'Zan korobos kor koramord!'] -ch 1034
`
  },
  {
    label: `[' warlock_3', 'Another name in my grimoire.']`,
    txt: `
[' warlock_3', 'Another name in my grimoire.'] -ch 1035
`
  },
  {
    label: `[' warlock_4', 'Pipsqueak.']`,
    txt: `
[' warlock_4', 'Pipsqueak.'] -ch 1036
`
  },
  {
    label: `[' warlock_5', 'Can you believe this? Ah ha ha ha ha ha ha ha ha ha!']`,
    txt: `
[' warlock_5', 'Can you believe this? Ah ha ha ha ha ha ha ha ha ha!'] -ch 1037
`
  },
  {
    label: `[' weaver_laugh', 'Hehehhehah!']`,
    txt: `
[' weaver_laugh', 'Hehehhehah!'] -ch 1038
`
  },
  {
    label: `[' weaver_thank', 'The pattern is complete.']`,
    txt: `
[' weaver_thank', 'The pattern is complete.'] -ch 1039
`
  },
  {
    label: `[' weaver_deny', "You thought you had me, didn't you?"]`,
    txt: `
[' weaver_deny', "You thought you had me, didn't you?"] -ch 1040
`
  },
  {
    label: `[' weaver_1', "I'm sensing a pattern here."]`,
    txt: `
[' weaver_1', "I'm sensing a pattern here."] -ch 1041
`
  },
  {
    label: `[' weaver_2', "There's a snag in your plans."]`,
    txt: `
[' weaver_2', "There's a snag in your plans."] -ch 1042
`
  },
  {
    label: `[' weaver_3', 'A pattern repeats.']`,
    txt: `
[' weaver_3', 'A pattern repeats.'] -ch 1043
`
  },
  {
    label: `[' weaver_4', 'A feast for my beetles.']`,
    txt: `
[' weaver_4', 'A feast for my beetles.'] -ch 1044
`
  },
  {
    label: `[' weaver_5', 'Ho, snap!']`,
    txt: `
[' weaver_5', 'Ho, snap!'] -ch 1045
`
  },
  {
    label: `[' windrunner_laugh', 'Hah-ha-ha-ha-ha!']`,
    txt: `
[' windrunner_laugh', 'Hah-ha-ha-ha-ha!'] -ch 1046
`
  },
  {
    label: `[' windrunner_thank', 'Easy breezy']`,
    txt: `
[' windrunner_thank', 'Easy breezy'] -ch 1047
`
  },
  {
    label: `[' windrunner_deny', "I don't think so."]`,
    txt: `
[' windrunner_deny', "I don't think so."] -ch 1048
`
  },
  {
    label: `[' windrunner_1', "Could be worse. Oh, wait, no it couldn't."]`,
    txt: `
[' windrunner_1', "Could be worse. Oh, wait, no it couldn't."] -ch 1049
`
  },
  {
    label: `[' windrunner_2', "You're not going anywhere."]`,
    txt: `
[' windrunner_2', "You're not going anywhere."] -ch 1050
`
  },
  {
    label: `[' windrunner_3', "If you weren't so damned dead, I'd shoot you again."]`,
    txt: `
[' windrunner_3', "If you weren't so damned dead, I'd shoot you again."] -ch 1051
`
  },
  {
    label: `[' windrunner_4', 'Tell me this did not just happen.']`,
    txt: `
[' windrunner_4', 'Tell me this did not just happen.'] -ch 1052
`
  },
  {
    label: `[' windrunner_5', 'I blow you a kiss.']`,
    txt: `
[' windrunner_5', 'I blow you a kiss.'] -ch 1053
`
  },
  {
    label: `[' winter_wyvern_laugh', 'Ah ha ha ha ha ha ha ha ha ha ha!']`,
    txt: `
[' winter_wyvern_laugh', 'Ah ha ha ha ha ha ha ha ha ha ha!'] -ch 1054
`
  },
  {
    label: `[' winter_wyvern_thank', 'Wonderful!']`,
    txt: `
[' winter_wyvern_thank', 'Wonderful!'] -ch 1055
`
  },
  {
    label: `[' winter_wyvern_deny', 'Chill, baby.']`,
    txt: `
[' winter_wyvern_deny', 'Chill, baby.'] -ch 1056
`
  },
  {
    label: `[' winter_wyvern_1', 'That was not wise!']`,
    txt: `
[' winter_wyvern_1', 'That was not wise!'] -ch 1057
`
  },
  {
    label: `[' winter_wyvern_2', 'Poor dear.']`,
    txt: `
[' winter_wyvern_2', 'Poor dear.'] -ch 1058
`
  },
  {
    label: `[' winter_wyvern_3', 'Never ask a wyvern why.']`,
    txt: `
[' winter_wyvern_3', 'Never ask a wyvern why.'] -ch 1059
`
  },
  {
    label: `[' winter_wyvern_4', 'Well deserved!']`,
    txt: `
[' winter_wyvern_4', 'Well deserved!'] -ch 1060
`
  },
  {
    label: `[' winter_wyvern_5', "Ah, I've never felt this good! Ah ha ha ha ha!"]`,
    txt: `
[' winter_wyvern_5', "Ah, I've never felt this good! Ah ha ha ha ha!"] -ch 1061
`
  },
  {
    label: `[' wisp_laugh', 'Laughing Beeps']`,
    txt: `
[' wisp_laugh', 'Laughing Beeps'] -ch 438
`
  },
  {
    label: `[' wisp_thank', 'Thankful Beeps']`,
    txt: `
[' wisp_thank', 'Thankful Beeps'] -ch 439
`
  },
  {
    label: `[' wisp_deny', 'Denying Beeps']`,
    txt: `
[' wisp_deny', 'Denying Beeps'] -ch 440
`
  },
  {
    label: `[' wisp_1', 'Friendly Beeps']`,
    txt: `
[' wisp_1', 'Friendly Beeps'] -ch 441
`
  },
  {
    label: `[' wisp_2', 'Triumphant Beeps']`,
    txt: `
[' wisp_2', 'Triumphant Beeps'] -ch 442
`
  },
  {
    label: `[' wisp_3', 'Sorrowful Beeps']`,
    txt: `
[' wisp_3', 'Sorrowful Beeps'] -ch 443
`
  },
  {
    label: `[' wisp_4', 'Angry Beeps']`,
    txt: `
[' wisp_4', 'Angry Beeps'] -ch 444
`
  },
  {
    label: `[' wisp_5', 'Meditative Beeps']`,
    txt: `
[' wisp_5', 'Meditative Beeps'] -ch 445
`
  },
  {
    label: `[' witch_doctor_laugh', 'Hoo hah hoo hoo hah.']`,
    txt: `
[' witch_doctor_laugh', 'Hoo hah hoo hoo hah.'] -ch 1062
`
  },
  {
    label: `[' witch_doctor_thank', 'Feeling good, man.']`,
    txt: `
[' witch_doctor_thank', 'Feeling good, man.'] -ch 1063
`
  },
  {
    label: `[' witch_doctor_deny', 'Wait for it...wait for it...']`,
    txt: `
[' witch_doctor_deny', 'Wait for it...wait for it...'] -ch 1064
`
  },
  {
    label: `[' witch_doctor_1', 'Dat make a big mess.']`,
    txt: `
[' witch_doctor_1', 'Dat make a big mess.'] -ch 1065
`
  },
  {
    label: `[' witch_doctor_2', 'Someone call de doctor?']`,
    txt: `
[' witch_doctor_2', 'Someone call de doctor?'] -ch 1066
`
  },
  {
    label: `[' witch_doctor_3', 'Oh, look at it go.']`,
    txt: `
[' witch_doctor_3', 'Oh, look at it go.'] -ch 1067
`
  },
  {
    label: `[' witch_doctor_4', "Stick a bone in it. You're done."]`,
    txt: `
[' witch_doctor_4', "Stick a bone in it. You're done."] -ch 1068
`
  },
  {
    label: `[' witch_doctor_5', 'Oyeaaaaah.']`,
    txt: `
[' witch_doctor_5', 'Oyeaaaaah.'] -ch 1069
`
  },
  {
    label: `[' zuus_laugh', 'Ha ha ha ha ha ha ha ha ha!']`,
    txt: `
[' zuus_laugh', 'Ha ha ha ha ha ha ha ha ha!'] -ch 1078
`
  },
  {
    label: `[' zuus_thank', "By my whiskers, that's good stuff!"]`,
    txt: `
[' zuus_thank', "By my whiskers, that's good stuff!"] -ch 1079
`
  },
  {
    label: `[' zuus_deny', 'Ha ha ha ha ha. Well what did you expect?']`,
    txt: `
[' zuus_deny', 'Ha ha ha ha ha. Well what did you expect?'] -ch 1080
`
  },
  {
    label: `[' zuus_1', 'Wait for it!']`,
    txt: `
[' zuus_1', 'Wait for it!'] -ch 1081
`
  },
  {
    label: `[' zuus_2', "That's all it takes to kill you?"]`,
    txt: `
[' zuus_2', "That's all it takes to kill you?"] -ch 1082
`
  },
  {
    label: `[' zuus_3', "Oh...this can't be good."]`,
    txt: `
[' zuus_3', "Oh...this can't be good."] -ch 1083
`
  },
  {
    label: `[' zuus_4', "Thund'rous applause!"]`,
    txt: `
[' zuus_4', "Thund'rous applause!"] -ch 1084
`
  },
  {
    label: `[' zuus_5', 'Did you think you could hide from a god?']`,
    txt: `
[' zuus_5', 'Did you think you could hide from a god?'] -ch 1085
`
  }
];
