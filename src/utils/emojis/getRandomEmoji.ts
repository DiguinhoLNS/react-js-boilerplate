import { EmojisProps } from "./types"
import getRandomInt from "../getRandomInt"

export default function getRandomEmoji(emojis: EmojisProps[]){
    return emojis.find(emoji => emoji.id === getRandomInt(1, emojis.length))?.emoji
}