// tiles.js

const tilesetGround = new Image();
tilesetGround.src = 'src/forest_/forest_.png'; // Remplacez par le chemin vers votre tileset de sol

const tilesetWall = new Image();
tilesetWall.src = 'src/forest_/forest_ [fencesAndWalls].png';

const tilesetTree = new Image();
tilesetTree.src = 'src/forest_/forest_ [resources].png';

const tilesetBridge1 = new Image();
tilesetBridge1.src = 'src/forest_/forest_ [bridgeHorizontal].png';

const tilesetFountain = new Image();
tilesetFountain.src = 'src/forest_/forest_ [fountain].png';


const tileSize = 16; // Taille de chaque case dans le tileset

const tileImages = {

// --------------------------------------- GROUND ---------------------------------------

    900: { tileset: tilesetGround, x: 2, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol

    901: { tileset: tilesetGround, x: 8, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol BIG
    902: { tileset: tilesetGround, x: 9, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol BIG
    903: { tileset: tilesetGround, x: 8, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol BIG
    904: { tileset: tilesetGround, x: 9, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol BIG
    
    905: { tileset: tilesetGround, x: 10, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol herbe
    906: { tileset: tilesetGround, x: 11, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol herbe
    907: { tileset: tilesetGround, x: 10, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol herbe
    908: { tileset: tilesetGround, x: 11, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol herbe
    909: { tileset: tilesetGround, x: 10, y: 3 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol herbe
    910: { tileset: tilesetGround, x: 11, y: 3 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol herbe
    911: { tileset: tilesetGround, x: 10, y: 4 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol herbe
    912: { tileset: tilesetGround, x: 11, y: 4 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol herbe

//-------
    
    913: { tileset: tilesetTree, x: 8, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Champignon Brun NE
    914: { tileset: tilesetTree, x: 8, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Champignon Brun SE
    915: { tileset: tilesetTree, x: 7, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Champignon Brun SO
    916: { tileset: tilesetTree, x: 7, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Champignon Brun NO
    
    917: { tileset: tilesetTree, x: 10, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0}, // Champignon Rouge NE
    918: { tileset: tilesetTree, x: 10, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0}, // Champignon Rouge SE
    919: { tileset: tilesetTree, x: 9, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0}, // Champignon Rouge SO
    920: { tileset: tilesetTree, x: 9, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0}, // Champignon Rouge NO
    
    921: { tileset: tilesetTree, x: 10, y: 3 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Fleur Rose NE
    922: { tileset: tilesetTree, x: 10, y: 4 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Fleur Rose SE
    923: { tileset: tilesetTree, x: 9, y: 4 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Fleur Rose SO
    924: { tileset: tilesetTree, x: 9, y: 3 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Fleur Rose NO
    
    925: { tileset: tilesetTree, x: 10, y: 5 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Fleur Bleu clair NE
    926: { tileset: tilesetTree, x: 10, y: 6 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Fleur Bleu clair SE
    927: { tileset: tilesetTree, x: 9, y: 6 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Fleur Bleu clair SO
    928: { tileset: tilesetTree, x: 9, y: 5 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Fleur Bleu clair NO

//-------



    100: { tileset: tilesetGround, x: 0, y: 0 , w: 1, h: 1, bonus: 0, bonus2: 0}, //NOP
    101: { tileset: tilesetGround, x: 4, y: 7 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Eau


//-------

    102: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Fin eau NE
    103: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Fin eau SE
    104: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Fin eau SO
    105: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Fin eau NO

    106: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Fin eau intérieur NE
    107: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Fin eau intérieur SE
    108: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Fin eau intérieur SO
    109: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Fin eau intérieur NO

    110: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Fin eau N
    111: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Fin eau E
    112: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0}, // Fin eau S
    113: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0}, // Fin eau O

    114: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0}, // Fin eau inter NO-SE
    115: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0}, // Fin eau inter NE-SO

    116: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Fin sol NE
    117: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Fin sol SE
    118: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Fin sol SO
    119: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Fin sol NO

    120: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Fin sol intérieur NE
    121: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Fin sol intérieur SE
    122: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Fin sol intérieur SO
    123: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Fin sol intérieur NO

    124: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Fin sol N
    125: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Fin sol E
    126: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0}, // Fin sol S
    127: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0}, // Fin sol O

    128: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0}, // Fin sol inter NO-SE
    129: { tileset: tilesetGround, x: 0, y: 0 , bonus: 0, bonus2: 0}, // Fin sol inter NE-SO

//-------

    130: { tileset: tilesetGround, x: 3, y: 5 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de l'eau NE
    131: { tileset: tilesetGround, x: 3, y: 7 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de l'eau SE
    132: { tileset: tilesetGround, x: 1, y: 7 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de l'eau SO
    133: { tileset: tilesetGround, x: 1, y: 5 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de l'eau NO

    134: { tileset: tilesetGround, x: 5, y: 5 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de l'eau intérieur NE
    135: { tileset: tilesetGround, x: 5, y: 6 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de l'eau intérieur SE
    136: { tileset: tilesetGround, x: 4, y: 6 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de l'eau intérieur SO
    137: { tileset: tilesetGround, x: 4, y: 5 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de l'eau intérieur NO

    138: { tileset: tilesetGround, x: 2, y: 5 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de l'eau N
    139: { tileset: tilesetGround, x: 3, y: 6 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de l'eau E
    140: { tileset: tilesetGround, x: 2, y: 7 , w: 1, h: 1, bonus: 0, bonus2: 0}, // Bord de l'eau S
    141: { tileset: tilesetGround, x: 1, y: 6 , w: 1, h: 1, bonus: 0, bonus2: 0}, // Bord de l'eau O

//-------

    142: { tileset: tilesetGround, x: 5, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de falaise NE
    143: { tileset: tilesetGround, x: 5, y: 4 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de falaise SE
    144: { tileset: tilesetGround, x: 1, y: 4 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de falaise SO
    145: { tileset: tilesetGround, x: 1, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de falaise NO

    146: { tileset: tilesetGround, x: 7, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de falaise intérieur NE
    147: { tileset: tilesetGround, x: 7, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de falaise intérieur SE
    148: { tileset: tilesetGround, x: 6, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de falaise intérieur SO
    149: { tileset: tilesetGround, x: 6, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de falaise intérieur NO

    150: { tileset: tilesetGround, x: 2, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de falaise N
    151: { tileset: tilesetGround, x: 5, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de falaise E
    152: { tileset: tilesetGround, x: 2, y: 4 , w: 1, h: 1, bonus: 0, bonus2: 0}, // Bord de falaise S
    153: { tileset: tilesetGround, x: 1, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0}, // Bord de falaise O

    154: { tileset: tilesetGround, x: 3, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de falaise NE Transition
    155: { tileset: tilesetGround, x: 3, y: 4 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de falaise SE Transition
    156: { tileset: tilesetGround, x: 4, y: 4 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de falaise SO Transition
    157: { tileset: tilesetGround, x: 4, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Bord de falaise NO Transition

// --------------------------------------- WALL ---------------------------------------

    200: { tileset: tilesetWall, x: 1, y: 5 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Mur seul

    //201: { tileset: tilesetWall, x: 0, y: 0 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Mur NS fin N1
    202: { tileset: tilesetWall, x: 1, y: 9 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Mur NS fin S1
    203: { tileset: tilesetWall, x: 1, y: 8 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Mur NS suite 1
    //204: { tileset: tilesetWall, x: 0, y: 0 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Mur NS fin N2
    //205: { tileset: tilesetWall, x: 0, y: 0 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Mur NS fin S2 (inexistant)
    206: { tileset: tilesetWall, x: 13, y: 6 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Mur NS suite 2

    207: { tileset: tilesetWall, x: 4, y: 5 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Mur EO fin E1
    208: { tileset: tilesetWall, x: 2, y: 5 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Mur EO fin O1
    209: { tileset: tilesetWall, x: 3, y: 5 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Mur EO suite 1
    210: { tileset: tilesetWall, x: 12, y: 5 , w: 1, h: 2, bonus: 0, bonus2: 0}, // Mur EO fin E2
    211: { tileset: tilesetWall, x: 8, y: 5 , w: 1, h: 2, bonus: 0, bonus2: 0}, // Mur EO fin O2
    212: { tileset: tilesetWall, x: 9, y: 5 , w: 1, h: 2, bonus: 0, bonus2: 0}, // Mur EO suite 2-1
    213: { tileset: tilesetWall, x: 10, y: 5 , w: 1, h: 2, bonus: 0, bonus2: 0}, // Mur EO suite 2-2
    214: { tileset: tilesetWall, x: 11, y: 5 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Mur EO suite 2-3

    215: { tileset: tilesetWall, x: 5, y: 9 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Mur NE
    216: { tileset: tilesetWall, x: 5, y: 5 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Mur SE
    217: { tileset: tilesetWall, x: 7, y: 5 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Mur SO
    218: { tileset: tilesetWall, x: 7, y: 9 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Mur NO

    219: { tileset: tilesetWall, x: 6, y: 5 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Mur croisement xN
    220: { tileset: tilesetWall, x: 7, y: 7 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Mur croisement xE
    221: { tileset: tilesetWall, x: 6, y: 9 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Mur croisement xS
    222: { tileset: tilesetWall, x: 5, y: 7 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Mur croisement xO
    223: { tileset: tilesetWall, x: 6, y: 7 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Mur croisement tout

    224: { tileset: tilesetWall, x: 11, y: 8 , w: 1, h: 2, bonus: 0, bonus2: 0}, // Mur grand 1
    225: { tileset: tilesetWall, x: 12.5, y: 7 , w: 2, h: 3, bonus: 0, bonus2: 0}, // Mur grand 2

//-------

    226: { tileset: tilesetWall, x: 4, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Barrière NS
    227: { tileset: tilesetWall, x: 2, y: 4 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Barrière EO
    228: { tileset: tilesetWall, x: 1, y: 3 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Barrière NE
    229: { tileset: tilesetWall, x: 1, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Barrière SE
    230: { tileset: tilesetWall, x: 3, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Barrière SO
    231: { tileset: tilesetWall, x: 3, y: 3 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Barrière NO

    232: { tileset: tilesetWall, x: 4, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Barrière fin N
    233: { tileset: tilesetWall, x: 3, y: 4 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Barrière fin E
    234: { tileset: tilesetWall, x: 4, y: 3 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Barrière fin S
    235: { tileset: tilesetWall, x: 1, y: 4 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Barrière fin O

//-------

    236: { tileset: tilesetWall, x: 5, y: 1 , w: 3, h: 3, bonus: 1, bonus2: 0}, // Portique 1

    
    // --------------------------------------- TREE ---------------------------------------
    
    300: { tileset: tilesetTree, x: 1, y: 1 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Arbre 1
    301: { tileset: tilesetTree, x: 2, y: 1 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Arbre 2
    302: { tileset: tilesetTree, x: 3.5, y: 1 , w: 2, h: 2, bonus: 0, bonus2: 0},  // Arbre 3
    303: { tileset: tilesetTree, x: 6, y: 1 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Arbre 4
    
    304: { tileset: tilesetTree, x: 1, y: 3 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Buisson 1
    305: { tileset: tilesetTree, x: 1, y: 4 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Buisson 2
    
    306: { tileset: tilesetTree, x: 4, y: 3 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Rocher 1
    307: { tileset: tilesetTree, x: 4, y: 4 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Rocher 2
    
    ///308: { tileset: tilesetTree, x: 0, y: 0 , bonus: 0, bonus2: 0},  // Rocher Grand 1
    //309: { tileset: tilesetTree, x: 0, y: 0 , bonus: 0, bonus2: 0}, // Rocher Grand 2
    
    //-------

    
    310: { tileset: tilesetTree, x: 1, y: 5 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Coffre
    311: { tileset: tilesetTree, x: 1, y: 7 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Panneau
    312: { tileset: tilesetTree, x: 2, y: 7 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Tombe 0
    313: { tileset: tilesetTree, x: 3, y: 7 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Tombe 2
    314: { tileset: tilesetTree, x: 4, y: 7 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Tombe 3
    315: { tileset: tilesetTree, x: 7, y: 7 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Feu de camp éteint
    
    316: { tileset: tilesetWall, x: 3, y: 7 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Po0

// --------------------------------------- BRIDGE 1 ---------------------------------------

    400: { tileset: tilesetBridge1, x: 1, y: 0 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Pont ligne 1-1
    929: { tileset: tilesetBridge1, x: 1, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Pont ligne 1-2
    402: { tileset: tilesetBridge1, x: 1, y: 3 , w: 1, h: 2, bonus: 0, bonus2: 0}, // Pont ligne 1-3
    403: { tileset: tilesetBridge1, x: 2, y: 0 , w: 1, h: 2, bonus: 0, bonus2: 0}, // Pont ligne 2-1
    930: { tileset: tilesetBridge1, x: 2, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0}, // Pont ligne 2-2
    405: { tileset: tilesetBridge1, x: 2, y: 3 , w: 1, h: 2, bonus: 0, bonus2: 0}, // Pont ligne 2-3
    406: { tileset: tilesetBridge1, x: 3, y: 0 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Pont ligne 3-1
    931: { tileset: tilesetBridge1, x: 3, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Pont ligne 3-2
    408: { tileset: tilesetBridge1, x: 3, y: 3 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Pont ligne 3-3
    409: { tileset: tilesetBridge1, x: 7, y: 0 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Pont ligne 4-1
    932: { tileset: tilesetBridge1, x: 7, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Pont ligne 4-2
    411: { tileset: tilesetBridge1, x: 7, y: 3 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Pont ligne 4-3
    412: { tileset: tilesetBridge1, x: 8, y: 0 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Pont ligne 5-1
    933: { tileset: tilesetBridge1, x: 8, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Pont ligne 5-2
    414: { tileset: tilesetBridge1, x: 8, y: 3 , w: 1, h: 2, bonus: 0, bonus2: 0},  // Pont ligne 5-3

    415: { tileset: tilesetBridge1, x: 2, y: 5 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Pont support O
    416: { tileset: tilesetBridge1, x: 7, y: 5 , w: 1, h: 1, bonus: 0, bonus2: 0}, // Pont support E

//-------

    417: { tileset: tilesetBridge1, x: 0, y: 0 , bonus: 0, bonus2: 0}, // Fin eau/terre NE
    418: { tileset: tilesetBridge1, x: 0, y: 0 , bonus: 0, bonus2: 0}, // Fin eau/terre SE
    419: { tileset: tilesetBridge1, x: 0, y: 0 , bonus: 0, bonus2: 0}, // Fin eau/terre SO
    420: { tileset: tilesetBridge1, x: 0, y: 0 , bonus: 0, bonus2: 0}, // Fin eau/terre NO

// --------------------------------------- OTHER ---------------------------------------

    500: { tileset: tilesetFountain, x: 1, y: 5, w: 4, h: -5, bonus: 1.5, bonus2: -2}, // Fontaine

    501: { tileset: tilesetGround, x: 8, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol BIG    NOP VERSION
    502: { tileset: tilesetGround, x: 9, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol BIG    NOP VERSION
    503: { tileset: tilesetGround, x: 8, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol BIG    NOP VERSION
    504: { tileset: tilesetGround, x: 9, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol BIG    NOP VERSION
    505: { tileset: tilesetGround, x: 10, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol herbe    NOP VERSION
    506: { tileset: tilesetGround, x: 11, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol herbe    NOP VERSION
    507: { tileset: tilesetGround, x: 10, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol herbe    NOP VERSION
    508: { tileset: tilesetGround, x: 11, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol herbe    NOP VERSION
    509: { tileset: tilesetGround, x: 10, y: 3 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol herbe    NOP VERSION
    510: { tileset: tilesetGround, x: 11, y: 3 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol herbe    NOP VERSION
    511: { tileset: tilesetGround, x: 10, y: 4 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol herbe    NOP VERSION
    512: { tileset: tilesetGround, x: 11, y: 4 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Sol herbe    NOP VERSION

    513: { tileset: tilesetTree, x: 8, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Champignon Brun NE  NOP VERSION
    514: { tileset: tilesetTree, x: 8, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Champignon Brun SE  NOP VERSION
    515: { tileset: tilesetTree, x: 7, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Champignon Brun SO  NOP VERSION
    516: { tileset: tilesetTree, x: 7, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Champignon Brun NO  NOP VERSION
    517: { tileset: tilesetTree, x: 10, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0}, // Champignon Rouge NE  NOP VERSION
    518: { tileset: tilesetTree, x: 10, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0}, // Champignon Rouge SE  NOP VERSION
    519: { tileset: tilesetTree, x: 9, y: 2 , w: 1, h: 1, bonus: 0, bonus2: 0}, // Champignon Rouge SO  NOP VERSION
    520: { tileset: tilesetTree, x: 9, y: 1 , w: 1, h: 1, bonus: 0, bonus2: 0}, // Champignon Rouge NO  NOP VERSION
    
    521: { tileset: tilesetTree, x: 10, y: 3 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Fleur Rose NE  NOP VERSION
    522: { tileset: tilesetTree, x: 10, y: 4 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Fleur Rose SE  NOP VERSION
    523: { tileset: tilesetTree, x: 9, y: 4 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Fleur Rose SO  NOP VERSION
    524: { tileset: tilesetTree, x: 9, y: 3 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Fleur Rose NO  NOP VERSION
    
    525: { tileset: tilesetTree, x: 10, y: 5 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Fleur Bleu clair NE  NOP VERSION
    526: { tileset: tilesetTree, x: 10, y: 6 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Fleur Bleu clair SE  NOP VERSION
    527: { tileset: tilesetTree, x: 9, y: 6 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Fleur Bleu clair SO  NOP VERSION
    528: { tileset: tilesetTree, x: 9, y: 5 , w: 1, h: 1, bonus: 0, bonus2: 0},  // Fleur Bleu clair NO  NOP VERSION
};


export { tilesetGround, tileSize, tileImages };