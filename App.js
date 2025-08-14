// import React, { useState } from 'react';
// import MainContainer from './navigation/MainContainer';

// export default function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   return (
//     <MainContainer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
//   );
// }

// import React, { useState } from 'react';
// import MainContainer from './navigation/MainContainer';

// export default function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   return (
//     <MainContainer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
//   );
// }

import React from 'react';
import MainContainer from './navigation/MainContainer';

export default function App() {
  return <MainContainer isDarkMode={false} setIsDarkMode={() => {}} />;
}


// import React from 'react';
// import { View, Text } from 'react-native';

// export default function App() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Hello World</Text>
//     </View>
//   );
// }



