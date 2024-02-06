import TranslateWord from "../TranslateWord/TranslateWord";

export default function TranslateWorld({ words, sideWords, setProgress, progress, tab, stateHeader }){

  return <TranslateWord words={words} sideWords={sideWords} setProgress={setProgress} progress={progress} tab={tab} stateHeader={stateHeader}/>
}