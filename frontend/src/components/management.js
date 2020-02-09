import React from 'react';
import ProgramGridItem from './programGridItem';
// import IndividualInfo from './individualInfo';


class ManagementGrid extends React.Component {

    render() {
        
        return  <div>
                <div> 
                    <ProgramGridItem/>
                </div>
                {/* <div> 
                    <IndividualInfo/>
                </div> */}
                </div>
        }
}

export default ManagementGrid;