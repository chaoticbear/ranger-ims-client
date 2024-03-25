FROM beevelop/android

# Android-NodeJS

RUN apt-get update && apt-get install -y curl gnupg2 lsb-release && \
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - && \
    apt-key fingerprint 1655A0AB68576280 && \
    export VERSION=node_20.x && \
    export DISTRO="$(lsb_release -s -c)" && \
    echo "deb https://deb.nodesource.com/$VERSION $DISTRO main" | tee /etc/apt/sources.list.d/nodesource.list && \
    echo "deb-src https://deb.nodesource.com/$VERSION $DISTRO main" | tee -a /etc/apt/sources.list.d/nodesource.list && \
    apt-get update && apt-get install -y nodejs && \
    node -v && npm -v && \
    npm install -g yarn && \
    yarn -v && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Cordova

# ENV CORDOVA_VERSION=12.0.0 \
#     CORDOVA_BUILD_TOOLS_VERSION=33.0.2 \
#     ANDROID_HOME=/opt/android

# WORKDIR "/tmp"

# RUN while true; do echo 'y'; sleep 2; done | sdkmanager "build-tools;${CORDOVA_BUILD_TOOLS_VERSION}" && \
#     npm i -g --unsafe-perm cordova@${CORDOVA_VERSION} && \
#     cordova -v && \
#     cd /tmp && \
#     cordova create myApp com.myCompany.myApp myApp && \
#     cd myApp && \
#     cordova plugin add cordova-plugin-camera --save && \
#     cordova platform add android --save && \
#     cordova requirements android && \
#     cordova build android --verbose && \
#     rm -rf /tmp/myApp && \
#     rm -rf /opt/android/licenses

# Ionic

ENV IONIC_VERSION 7.1.1

RUN apt-get update && apt-get install -y git bzip2 openssh-client && \
    npm install -g --unsafe-perm @ionic/cli@${IONIC_VERSION} && \
    ionic --version && \
    cd /tmp && \
    ionic start myNewProject blank --type=react --capacitor && \
    cd myNewProject && \
    ionic build && \
    ionic capacitor build android --no-open && \
    rm -rf /tmp/myNewProject && \
    rm -rf /var/lib/apt/lists/* && apt-get clean
    
# accepts all the Licenses (please read first)
RUN yes | sdkmanager --licenses --sdk_root=$ANDROID_SDK_ROOT