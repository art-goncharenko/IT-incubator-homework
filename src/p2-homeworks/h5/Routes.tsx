import React from 'react'
import Junior from "../h5-rrd-v6/pages/Junior";

export const PATH = {
    PRE_JUNIOR: '/PreJunior',
    JUNIOR: '/Junior',
    JUNIORPLUS: '/JuniorPlus'
    // add paths
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            {/*<Switch>*/}

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            {/*<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>*/}

            {/*<Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>*/}
            {/*    <Route path={PATH.PRE_JUNIOR} render={() => <Junior/>}/>*/}

            {/*    // add routes*/}

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            {/*<Route render={() => <Error404/>}/>*/}

            {/*</Switch>*/}
        </div>
    )
}

export default Routes
