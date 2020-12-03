import React from 'react';
import RatingBox from './components/RatingBox';
import {movieList, ratings} from './data';
import {Card, Button} from "react-bootstrap";
import { Calcs2 } from './Calcs2';

class Calcs extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        position: [],
        data: [],
        recommendedMovies: [],
        values: [],
        isVisible: true

    }
    this.movieList = movieList;
    this.ratings=ratings;
}
    handleValue= (e, i) => {
        this.setState(state => {
            const position = [...state.position, i];
            const data = [...state.data, e];
            return {
              position, 
              data,
            };
          });
        console.log(this.state);
        console.log(e + " " + i  )
    }
    test(item, i) {  
        if ((i> -1 && i < 4) ||(i> 6 && i < 11)||(i> 13 && i < 18)||(i> 20 && i < 25)||(i> 27 && i < 32)){
        return  (                
        <div className="card-container">
        <Card style={{ width: '30rem' }} >
            {/* {console.log(item + " " + i)}        */}
        <Card.Body>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/'+(i)+'.jpg'} ></Card.Img>
            <Card.Title>{item}</Card.Title>
            <Card.Text>
            Please rate the movie from the following ratings, 0 being worst and 5 being best.
            </Card.Text>
            <RatingBox class="rating-box" getValue={((e) => this.handleValue(e, i))} />
        </Card.Body>
        </Card>
        </div>
        )
    }
}
test2(item, i) {  {
    return  (                
    <div className="card-container">
    <Card style={{ width: '30rem' }} >
        {/* {console.log(item + " " + i)}        */}
    <Card.Body>
    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/'+(i)+'.jpg'} ></Card.Img>
        <Card.Title>{movieList[i]}</Card.Title>
        <Card.Text>
        The Sim score for this move is {item}
        </Card.Text>
    </Card.Body>
    </Card>
    </div>
    )
}
}

displayData = () => {
    console.log(this.state.data);
    let testMap = new Map();
    for (let i = 0; i<this.state.position.length; i++) {
        console.log(i + " " + this.state.position[i] + " " + this.state.data[i]);
        testMap[this.state.position[i]] = this.state.data[i];
    }
    for (let i = 0; i<35; i++) {
        if (testMap[i] == null) {
            testMap[i] = -1;
        }
    }
    let altonFinesse = [];

    for (let i = 0; i <35; i++) {
        altonFinesse.push(testMap[i]);
        console.log(testMap[i]);
    }
    

    this.doCalcs(altonFinesse);
    
}
 doCalcs = (userInput) => {
    let simScoreList = [];
    

    for (let i = 0; i < ratings.length; i++) {
        // let div = document.createElement("div");

        // let heading = document.createElement("h2");
        // heading.appendChild(document.createTextNode("Sim(" + i + ", TestUser)"));
        // div.appendChild(heading);
    

        // let scorenode = document.createElement("p");
        let score = this.findSimilarity(ratings[i], userInput);
        // let scoretext = document.createTextNode("Score = " + score);
        // scorenode.appendChild(scoretext);
        // div.appendChild(scorenode);


        // document.getElementById("main").appendChild(div);

        simScoreList.push(score);
        
        //Do something
        
    }
    
    let simusers = this.getUsersWithPosScore(simScoreList);
    console.log("Similarity Scores: " + simScoreList);
    console.log("Users with Sim Scores > 0: " + simusers);
    let predictedRatingForMovie = new Map();
    for (let i = 0; i < userInput.length; i++)  {
        let predictedRating;
        if (userInput[i] == -1) {
            let numandden = this.calcNumAndDenRecommender(simusers,simScoreList,i);
            predictedRating = ( numandden[0] / numandden[1]);
            //console.log("Numerator = " + numandden[0]);
            //console.log("Denominator = " + numandden[1]);
            predictedRatingForMovie.set(i,predictedRating);
            //console.log("Users Predicted Rating for Movie " + i + " is " + predictedRating);
        }
        
    }

    let mapSorted = new Map([...predictedRatingForMovie.entries()].sort((a, b) => b[1] - a[1]));

    //mapSorted = filterRatingsAboveFour(mapSorted);
    mapSorted.forEach( (value, key) => {
        console.log("Predicted Rating for Movie " + movieList[key] + " is " + value);
        this.setState(state => {
            const recommendedMovies = [...state.recommendedMovies, value];
            const values = [...state.values, key];
            console.log(recommendedMovies + "THIS recommded");
            return {
              recommendedMovies, 
              values,
            }
          });
    });
    
    //findSimilarity(ratings[0],testuserrating);
    // console.log("Content Profile: " + getUserContentProfile(userInput));
    //document.getElementById("btnLoad").disabled = "true";
    }

    filterRatingsAboveFour= (map)  =>  {
        let resmap = new Map();
        map.forEach( (value, key) => {
            if (value >= 4)  {
                resmap.set(key,value);
            }
        });
        return resmap;
    }
    
    getUserContentProfile =(userratings) =>{
        let comedySum = 0; let comLen = 0;
        let romanceSum = 0; let romLen = 0;
        let dramaSum = 0; let dramLen = 0;
        let animationSum = 0; let animLen = 0;
        let sportSum = 0; let sporLen = 0;
        for (let i = 0; i < 7; i++) { if (userratings[i] != -1) { comedySum += userratings[i]; comLen++; } }
        for (let i = 7; i < 14; i++) { if (userratings[i] != -1) { romanceSum += userratings[i]; romLen++ } }
        for (let i = 14; i < 21; i++) { if (userratings[i] != -1) { dramaSum += userratings[i]; dramLen++; } }
        for (let i = 21; i < 28; i++) { if (userratings[i] != -1) { animationSum += userratings[i]; animLen++; } }
        for (let i = 28; i < 35; i++) { if (userratings[i] != -1) { sportSum += userratings[i]; sporLen++; } }
    
        return [ ((comedySum/comLen)/5), ((romanceSum/romLen)/5), ((dramaSum/dramLen)/5), ((animationSum/animLen)/5), ((sportSum/sporLen)/5)  ];
    }
    
    calcNumAndDenRecommender= (simusers, simScoreList, movieIndex) => {
        let num = 0;
        let den = 0;
        for (let i = 0; i < simusers.length; i++)   {
            if (ratings[simusers[i]][movieIndex] != -1)   {
                let simscorebyuser = simScoreList[simusers[i]];
                num += ( simscorebyuser * ratings[simusers[i]][movieIndex] );
                den += simscorebyuser;
            }
        }
        let res = [num,den];
        return res;
    }
    
    getUsersWithPosScore= (simscorelist) => {
        let res = [];   
        for (let i = 0; i < simscorelist.length; i++)   {
            if (simscorelist[i] > 0)    {
                res.push(i);
            }
        }
        return res;     //list of indexes (users) with positive similarity scores
    }
    
    
    findSimilarity = (user1,user2) =>  {
        let common = this.findCommonmovieList(user1, user2);                //array of indexes of common movieList rated
        let profile1 = this.getRatingsForCommonmovieList(user1, common);    //array of ratings for user1
        let profile2 = this.getRatingsForCommonmovieList(user2, common);    //array of ratings for user2
        let average1 = this.getAverageRating(profile1);
        let average2 = this.getAverageRating(profile2);
        let numandden = this.calcNumAndDen(profile1,profile2,average1,average2);
        let sim;
        if (numandden[0] == 0 || numandden[1] == 0) { sim = 0; }
        else    { sim = numandden[0]/numandden[1]; } 
        //console.log("Num = " + numandden[0] + "    Den = " + numandden[1] + "    Profile1 = " + profile1.toString() + "    Profile2 = " + profile2.toString());
        /*STEPS:
        -find common rated movieList between user and user profiles in db
        -get ratings for these movieList from both users
        -get average user rating on these common movieList
        -do calcs for NUM and DEN and find similarity score
        
        console.log("Common movieList: " + common.toString());
        console.log("Ratings for User 1: " + profile1.toString());
        console.log("Ratings for User 2: " + profile2.toString());
        console.log("Average Rating for User 1: " + average1);
        console.log("Average Rating for User 2: " + average2);
        console.log("Numerator: " + numandden[0]);
        console.log("Denominator: " + numandden[1]);
        console.log("Similarity Score: " + sim);
        */
        return sim;
    }
    
    
    calcNumAndDen = (ratings1, ratings2, average1, average2) =>    {
        let num = 0;
        let denopart1 = 0;
        let denopart2 = 0;
        for (let i = 0; i < ratings1.length; i++)   {
            num += ( (ratings1[i]-average1) * (ratings2[i]-average2) );
            denopart1 += Math.pow((ratings1[i]-average1), 2);
            denopart2 += Math.pow((ratings2[i]-average2), 2);
        }
        let den = Math.sqrt(denopart1*denopart2);
        let res = [num,den];
        return res;
    }
    
    getAverageRating = (ratings) => {
        let sum = 0;
        for (let i = 0; i < ratings.length; i++)    {
            sum += ratings[i];
        }
        return (sum/ratings.length);
    }
    
    getRatingsForCommonmovieList = (user, commonmovieList) =>  {
        let ratings = [];
        for (let i = 0; i < commonmovieList.length; i++)   {
            ratings.push(user[commonmovieList[i]]);
        }
        return ratings;
    }
    
    findCommonmovieList= (arr1, arr2)=> {
        let result = [];
        for (let i = 0; i < arr1.length; i++)   {
            if (arr1[i] != -1 && arr2[i] != -1) {
                result.push(i);
            }
        }
        return result;
    }
    render() {
        if (this.state.isVisible) {
        return (
            <>  
            <div className="finesse">
            {
            this.movieList.map((item,i) => (
                <div key={i}>
                    {this.test(item,(i))}
                </div>
                        )) 
                }
                </div> 
                <div className="YERRRRRR">
                <Button variant="danger" className="BARERATINGSFAM" onClick={this.displayData}>SUBMIT RATINGS</Button>
                </div>
            </>
        )
    }
    else if (!this.state.isVisible) {
        return (
            <>
            <div className="finesse">
            {
            this.state.recommendedMovies.forEach((item,i) => (
                <div key={i}>
                    {this.test2(item,(i))}
                    
                </div>
                        )) 
                }
                </div> 
            </>
        )
    }
}

}
export {Calcs};