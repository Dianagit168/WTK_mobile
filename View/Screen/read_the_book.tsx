import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import NormalText from '../components/normal_text';
import brandingColor from '../components/branding_color';

export default function ReadTheBook() {
  return (
    <SafeAreaView style={{flex: 1, marginTop: 10}}>
      <ScrollView style={{paddingHorizontal: 10, flex: 1}}>
        <NormalText
          contentT="Lorem ipsum dolor sit amet consectetur. Nisi integer ultrices sit sociis fermentum tincidunt sed quis. Leo diam sed eget in vestibulum placerat justo. Semper magna amet cum volutpat massa et. Lectus ipsum mollis suspendisse a id egestas pretium ac. Venenatis enim cras orci pulvinar nec mauris egestas viverra elementum. Ornare placerat vitae risus cras lorem aliquet tempor aliquet. Felis non magna varius aliquam bibendum id. Pellentesque aenean ultrices condimentum elementum nam. Nullam urna et nascetur lectus. Neque vitae lobortis varius ultricies dapibus nisl dui vulputate. Nunc eget nibh et purus a ultrices.
        Cursus diam bibendum nec sed bibendum pellentesque mauris bibendum orci. Porta a aliquet ac a scelerisque quis. Nec mattis pulvinar sapien mauris ut dignissim nulla euismod. Mauris at vitae consectetur diam senectus volutpat molestie elit nec. Curabitur in viverra feugiat facilisis ipsum consequat nunc donec. Pharetra nisi vitae at mi commodo. Aliquam ut ut lectus quis risus magna gravida purus. Rhoncus vel amet velit enim lacinia quam. Suspendisse nibh aliquam lacus aliquam vitae pharetra imperdiet. Rutrum quis curabitur nisl lacus interdum etiam nisl nec. Dolor sapien at morbi ullamcorper facilisis.
        Enim neque in ornare venenatis elementum pharetra. Urna etiam elit ac erat mattis nunc viverra consequat. Fringilla dis adipiscing a nullam blandit sed. Lorem non cursus tristique tempus proin morbi nibh faucibus. Metus a blandit nulla orci nulla viverra. Malesuada eget magna non sed eget molestie pharetra. In et enim vel sociis massa urna faucibus. Eget quam tellus interdum turpis. At enim elit non imperdiet aenean nibh. Turpis dictum lectus donec cursus tortor dolor et blandit est. Mi duis felis turpis augue in gravida. Rhoncus sed quisque ac dictum non bibendum fames elementum mauris. Consequat scelerisque eu adipiscing convallis ultrices cras gravida habitasse.
        Tellus vivamus morbi integer aliquam sem. Imperdiet mattis luctus et eget mauris. Sed consectetur blandit malesuada fusce amet feugiat. Fermentum mi aliquet mi feugiat vehicula. Est rhoncus erat et auctor.
        Fermentum eget ultrices tristique maecenas ultrices odio rhoncus arcu. Est vitae condimentum risus egestas massa. Purus amet augue quis est risus parturient faucibus. Tortor et sem adipiscing vulputate odio. Morbi euismod sed lectus rhoncus. Pretium et commodo id vestibulum.
        Aliquet placerat sed quam at. Aliquam porttitor vitae molestie egestas nisi quis. Nec turpis donec turpis ultrices eget metus eget. Venenatis tincidunt tellus mauris in. Ornare gravida amet dictum nisi mattis. Sed id et potenti sed. Erat porta in nullam morbi. Egestas urna lobortis auctor facilisi interdum elit faucibus netus. Malesuada orci sapien a augue mauris tortor. Porttitor odio auctor lectus risus volutpat ullamcorper tortor id. Arcu ac urna nunc leo sed mattis euismod magna sed. Gravida diam lorem risus nibh erat ut. Quam enim ipsum tempus ipsum faucibus. Pellentesque enim aliquam sit natoque quis viverra. Vitae ultrices cursus vitae convallis."
          colorT={brandingColor.blueBlack60}
          numberOfLines={1000}
          backColorI={brandingColor.blueBlack3}
          fontSizeT={14}
          paddingVer={10}
          paddingHor={10}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
