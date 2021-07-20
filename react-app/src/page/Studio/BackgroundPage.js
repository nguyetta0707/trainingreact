import React, { Component } from 'react';
import './BackgroundPage.css';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image
} from 'react-native';
import BackGroundService from '../../services/BackgroundService/BackGroundService';
import { Link } from 'react-router-dom';

class BackgroundPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemChacracters: [],
      isLoaded: false,
      imageColor: "White",
      imageId: 1,
      srcImageChanged: ""
    };
  }

  componentDidMount() {
    BackGroundService.getBackgroundImageCharacter().then((res) => {
      this.setState({
        itemChacracters: res.data,
        srcImageChanged: res.data.filter(item =>
          item.id === 8).map(itemGet => itemGet.imageData),
      });
      console.log("gia tri itemChacracters ban dau la ", res.data);
      console.log("gia tri srcImageChanged ban dau la ", this.state.srcImageChanged);
    })
    BackGroundService.getBackgroundImage().then((res) => {
      this.setState({ items: res.data, isLoaded: true, imageId: 1, imageColor: "White" });
    });
  }

  changeBackgroundImage = (imgColor, id) => {
    //neu imageId cua hinh click vao = imageId cua state -> ko lam gi het
    //neu imageId cua hinh click vao khac imageId cua state --> doi hinh nen
    console.log("id dang click la", id);
    console.log("imageId cua state dang la", this.state.imageId);
    console.log("imgColor cua state dang la", this.state.imageColor);
    if (imgColor === this.state.imageColor) {

    }
    else {
      this.setState({
        srcImageChanged: this.state.itemChacracters.filter(item =>
          item.imageColor === imgColor).map(itemGet => itemGet.imageData),
        imageId: id, imageColor: imgColor
      })
      console.log("gia tri sau khi thay doi hinh la ", this.state.srcImageChanged);
    }
  }

  render() {
    var { isLoaded, items, imageId, srcImageChanged, itemChacracters, imageColor } = this.state;
    console.log("isLoaded render ra", isLoaded);
    console.log("items  render ra", items);
    console.log("imageId  render ra", imageId);
    console.log("srcImageChanged  render ra", srcImageChanged);
    console.log("itemChacracters  render ra", itemChacracters);
    console.log("imageColor  render ra", imageColor);

    if (!isLoaded) {
      return <div>Loading...</div>
    }

    return (
      <div className="background-container">
        <div className="item-background-container item-sample">
          <tr>
            <div className="item-background-container-header">Sample</div>
          </tr>
          <tr>
            <img src={srcImageChanged}></img>
          </tr>
        </div>
        <div className="item-background-container item-background">
          <table>
            <tr className="item-background-container-header">Background</tr>
            <tr>
              <SafeAreaView style={styles.container}>
                <FlatList
                  columnWrapperStyle={{ justifyContent: 'space-between' }}
                  data={this.state.items}
                  renderItem={({ item }) => (
                    <View
                      style={{ flex: 1/3, flexDirection: 'column', margin: 1 }}>
                      <Link onClick={() => this.changeBackgroundImage(item.imageColor, item.id)}>
                        <Image style={styles.imageThumbnail}
                          source={{ uri: item.imageData }}
                          imageId={item.id} />
                      </Link>
                    </View>)}
                  //Setting the number of column
                  numColumns={3}
                  keyExtractor={(item, index) => index.toString()} />
              </SafeAreaView>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}

//images get from api library in network
/* class BackgroundPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      items:[],
      isLoaded : false,
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(res=>res.json())
    .then(json => {
      this.setState({
        isLoaded : true,
        items:json,
      })
    });
  }

  render() {
    var {isLoaded,items} = this.state;
    if(!isLoaded){
      return <div>Loading..............................................</div>
    }
    return(
      <div className= "background-container">
            <div className="item-background-container item-sample">
              <img src={BackGroundMainImage} /> 
            </div>
            <div className="item-background-container item-background">
              <SafeAreaView style={styles.container}>
              <FlatList
                data={this.state.items}
                renderItem={({ item }) => (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'column',
                      margin: 1
                    }}>
                    <Image
                      style={styles.imageThumbnail}
                      source={{ uri: item.thumbnailUrl }}
                    />
                  </View>
                )}
                //Setting the number of column
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
              />
              </SafeAreaView>
            </div>
        </div>
    )
  }
} */


/* function BackgroundPage(){
    return(
        <div className= "background-container">
            <div className="item-background-container item-sample">Sample</div>
            <div className="item-background-container item-background">Background</div>
        </div>
    )
}  */


//get data user info from db OK
/* class BackgroundPage extends Component {
  constructor(props) {
    super(props);
    this.state = {users: []};
  }
  
  componentDidMount() {
      BackGroundService.getEmployees().then((res) => {
        this.setState({ users: res.data});
    });
  }
  
  render() {
    const userList = this.state.users.map(user => {
      return <tr key={user.id}>
        <td style={{whiteSpace: 'nowrap'}}>{user.userName}</td>
      </tr>
    });
  
    return (
      <div className= "background-container">
            <div className="item-background-container item-sample">{userList}</div>
            <div className="item-background-container item-background">Background</div>
      </div>
    );
  }
}  */


export default BackgroundPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 20,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
  },
});
