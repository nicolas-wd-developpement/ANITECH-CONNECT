<template>
    <v-main style="padding: 0;">
        <v-sheet
        height="620"
        class="overflow-hidden"
        style="position: relative;"
        >
            <v-card-text class="firstBlock">
                <v-row>
                    <v-col cols="0" lg="2">
                        <v-spacer></v-spacer>
                    </v-col>
                    <v-col cols="12" lg="8">
                        <h1>Online identification</h1>
                    </v-col>
                    <v-col cols="0" lg="2">
                        <v-spacer></v-spacer>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-sparkline></v-sparkline>
            <v-spacer></v-spacer>
            <v-row>
                
                <v-col>
                    <v-spacer></v-spacer>
                </v-col>
                <v-col>
                <transition 
                    appear
                    name="connect"
                    @enter="onEnter"
                    @leave="onLeave">
                >
                    <v-btn
                        color="info"
                        height="150"
                        width=" 200"
                        rounded 
                        to="/connectTag"
                        class="myBtn"
                        elevation="11"
                    >
                        Activate your tag
                    <v-icon>mdi-account-circle</v-icon>
                    </v-btn>
                </transition>
                </v-col>
                <v-col>  
                    <v-spacer></v-spacer>
                </v-col>
            </v-row>
            <v-row>
                
                <v-col>
                    <v-spacer></v-spacer>
                </v-col>
                <v-col>
                    <transition                  
                    appear
                    name="find"
                    @enter="onEnter"
                    @leave="onLeave"
                  
                    >
                        <v-btn
                            color="warning"
                            height="150"
                            width=" 200"
                            rounded 
                            to="/petFound"
                            class="myBtn delay-1"
                            elevation="11"
                    
                        >
                            found a pet
                        <v-icon>mdi-dog</v-icon>
                        </v-btn>
                    </transition>
                </v-col>
                <v-col>  
                    <v-spacer></v-spacer>
                </v-col>
            </v-row>
            <v-card-text>
                <v-row>
                    <v-col cols="0" lg="2">
                        <v-spacer></v-spacer>
                    </v-col>
                    <v-col cols="12" lg="8">
                        <transition
                            name="bounce"
                            appear
                        >
                            <h2 class="delay-2">Activate your ANITECH tag get your dog safe</h2>
                        </transition>
                        
                    </v-col>
                    <v-col cols="2" lg="2">
                        <v-spacer></v-spacer>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="2" lg="2">
                        <transition                  
                            appear
                            name="pawtransition"
                            @after-enter="onAfterEnter"
                            >
                            <span class="delay-3">
                                <v-icon
                                    class="paw"
                                    color= "primary"
                                    size=25
                                    >mdi-paw
                                </v-icon>
                            </span>
                            </transition>
                    </v-col>
                    <v-col cols="2" lg="2">
                    </v-col>
                    <v-col cols="2" lg="2">
                        <transition                  
                            appear
                            name="pawtransition"
                            @enter="onEnter"
                            @after-enter="onAfterEnter"
                            >
                            <span class="delay-5">
                                <v-icon
                                    class="paw"
                                    color= "primary"
                                    size=45
                                    >mdi-paw
                                </v-icon>
                            </span>
                        </transition>
                    </v-col>
                    <v-col cols="2" lg="2">

                    </v-col>
                    <v-col cols="2" lg="2">
                        <transition                  
                            appear
                            name="pawtransition"
                            @enter="onEnter"
                           @after-enter="onAfterEnter"
                            >
                            <span class="delay-7">                       
                                <v-icon
                                    class="paw"
                                    color= "primary"
                                    size=65
                                    >mdi-paw
                                </v-icon>
                            </span> 
                    </transition>
                    </v-col>
                    <v-col cols="2" lg="2">
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="2" lg="2">
 
                    </v-col>
                    <v-col cols="2" lg="2">
                    <transition                  
                        appear
                        name="pawtransition"
                        @enter="onEnter"
                        @after-enter="onAfterEnter"
                        >
                        <span class="delay-4">     
                            <v-icon
                                class="paw"
                                color= "primary"
                                size=35
                                >mdi-paw
                            </v-icon>
                        </span>
                    </transition>
                    </v-col>
                    <v-col cols="2" lg="2">

                    </v-col>
                    <v-col cols="2" lg="2">
                    <transition                  
                        appear
                        name="pawtransition"
                        @enter="onEnter"
                        @after-enter="onAfterEnter"
                        >
                        <span class="delay-6">     
                            <v-icon
                                class="paw"
                                color= "primary"
                                size=55
                                >mdi-paw
                            </v-icon>
                        </span>
                    </transition>
                    </v-col>
                    <v-col cols="2" lg="2">
    
                    </v-col>
                    <v-col cols="2" lg="2">
                    <transition                  
                        appear
                        name="pawtransition"
                        @enter="onEnter"
                        @after-enter="onAfterEnter"
                        >
                        <span class="delay-8">  
                            <v-icon
                                class="paw "
                                color= "primary"
                                size=75
                                >mdi-paw
                            </v-icon>
                        </span>
                    </transition>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-sheet>
    </v-main>
</template>

<script>
import gsap from 'gsap'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Index',
  methods: {
        onAfterEnter (el,done) {
            gsap.to(el, {
            opacity: 0,
            height: 0,
            ease: gsap.effects.ease,
            onComplete: done
        })
        }
    },
  }
</script>
<style>
.find-enter {
    opacity: 0;
}

.connect-enter {
    opacity: 0;
}

.bounce-enter {
    opacity: 0;
}

.pawtransition-enter,
.pawtransition-leave
 {
    opacity: 0;
    
}

.pawtransition-enter-active,
.pawtransition-leave-active {
  transition: opacity 0.5s ease;
}

.connect-enter-active {
   transition: opacity 2s ease-out;
}


.find-enter-active {
    transition: opacity 2s ease-out;
}

.bounce-enter-active {
    transition: opacity 2s ease-in-out;
}

.bounce-enter-active {
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

.pawtransition-enter-active {
   transition: opacity 2s ease-out;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.paw {
    transform: rotate(90deg);
}

.delay-1 {
        transition-delay: 1s;
}

.delay-2 {
        transition-delay: 2.5s;
        animation-delay: 3s;
}

.delay-3 {
        transition-delay: 3s;
        animation-delay: 3s;
}

.delay-4 {
       transition-delay: 3.5s;
        animation-delay: 3s;
}

.delay-5 {
        transition-delay: 4.5s;
        animation-delay: 3s;
}

.delay-6 {
        transition-delay: 5.5s;
        animation-delay: 3s;
}

.delay-7 {
        transition-delay: 6.5s;
        animation-delay: 3s;
}

.delay-8 {
        transition-delay: 7.5s;
        animation-delay: 3s;
}

.delay-9 {
        transition-delay: 8.5s;
        animation-delay: 3s;
}

element.style {
    padding: 0px 0px 0px !important;
}

</style>
