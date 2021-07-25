import * as React from 'react';
import { StyleSheet, Text, View, Input } from 'react-native';
import PropTypes from 'prop-types';

function Converter() {
    const [km, setKm] = useState(0);

    Converter.defaultProps = {
        km: 0
    }

    Converter.propTypes = {
        km = PropTypes.number.isRequired
    }

    function convert(km) {
        return (km/1.609).toFixed(2);
    }

    function handleChange(e) {
        setKm(e.target.value);
    }

    return (
        <View>
            <Input
                type="text" value={km}
                onChange={handleChange}
            />
            <Text>{km} = {convert(km)} miles.</Text>
        </View>
    );
}

export default Converter;