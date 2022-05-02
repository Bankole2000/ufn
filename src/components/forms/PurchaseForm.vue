<template>
  <div class="purchase-form my-16">
    <v-container>
      <v-row>
        <v-col cols="12">
          <p class="headline mb-0">Purchase Order Form</p>
          <v-divider class="mb-4 mt-2"></v-divider>
          <v-alert text type="warning" prominent>
            Please DO NOT Fill The Order Form If You Are Not Ready To Pay For
            The ULTIMATE FERTILITY PACK In 2-3 Business Days That It Will Take
            To Get To You, Or If You May Travel, Or Be Too Busy To Receive The
            Delivery.
          </v-alert>
        </v-col>
        <v-col cols="12" class="py-2">
          <v-slide-y-transition>
            <v-alert
              :key="0"
              v-show="success ? true : false"
              text
              dense
              style="border-radius: 15px"
              class="text-left"
              type="success"
              >{{ success }}</v-alert
            >
          </v-slide-y-transition>
          <v-slide-y-transition class="py-0" leave-absolute group>
            <v-alert
              v-for="(error, i) in errors"
              :key="i + 1"
              text
              type="error"
              style="border-radius: 15px"
              class="text-left"
              dense
              >{{ error }}</v-alert
            >
          </v-slide-y-transition>
        </v-col>
        <v-col cols="12" md="6" class="py-0">
          <v-text-field
            outlined
            :rules="[rules.required]"
            prepend-inner-icon="mdi-account"
            v-model="data.firstname"
            label="First Name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6" class="py-0">
          <v-text-field
            outlined
            :rules="[rules.required]"
            prepend-inner-icon="mdi-account"
            v-model="data.lastname"
            label="Last Name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6" class="py-0">
          <v-text-field
            outlined
            v-model="data.phone"
            :rules="[rules.required]"
            prepend-inner-icon="mdi-phone"
            label="Phone Number"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6" class="py-0">
          <v-text-field
            outlined
            v-model="data.altPhone"
            prepend-inner-icon="mdi-phone-outline"
            label="Alternate Phone Number"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-select
            label="Select A Package"
            prepend-inner-icon="mdi-package"
            v-model="data.selectedPackage"
            outlined
            :rules="[rules.required]"
            :items="items"
          >
            <template v-slot:selection="data">
              <p class="mb-0" v-html="data.item.text"></p>
            </template>
            <template v-slot:item="data">
              <p class="mb-0" v-html="data.item.text"></p>
            </template>
          </v-select>
          <v-slide-y-transition>
            <div v-show="formIsValid">
              <v-alert prominent text type="info">
                We Incur A Lot Of Costs To Cover The Delivery Of This Product
                Across Nigeria While Still Maintaining A Reduced Price, So To
                Avoid A Waste Of Time And Resources, We Plead With You To Order
                ONLY If You Are Ready For This Product.
              </v-alert>
              <v-alert type="success"
                >So If You’re READY, Let’s Get You Your Order Now!!!</v-alert
              >
            </div>
          </v-slide-y-transition>
          <v-btn
            :disabled="!formIsValid"
            x-large
            block
            color="primary"
            @click="placeOrder"
            >Place Your Order Now</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        firstname: "",
        lastname: "",
        phone: "",
        altPhone: "",
        selectedPackage: "",
      },
      errors: [],
      success: "",
      items: [
        {
          text: "1 Pack = &#8358; 15,000 <del>&#8358; 20,000</del> (15 Days Treatment)",
          value: "1 Pack = N15,000 (15 Days Treatment)",
        },
        {
          text: "2 Pack = &#8358; 20,000 <del>&#8358; 40,000</del> (30 Days Treatment)",
          value: "2 Pack = N20,000 (30 Days Treatment)",
        },
        {
          text: "4 Packs (MAN + WOMAN Family COMBO choice) = &#8358; 40,000 <del>&#8358; 80,000</del> (1 Month Treatment)",
          value:
            "4 Packs (MAN + WOMAN Family COMBO choice) = N40,000 (1 Month Treatment)",
        },
        {
          text: "8 Packs (MAN + WOMAN COMBO) = &#8358; 80,000 <del>&#8358; 160,000</del> (2 Months Treatment)",
          value: "8 Packs (MAN + WOMAN COMBO) = N80,000 (2 Months Treatment)",
        },
      ],
      rules: {
        required: (value) => !!value || "Required.",
      },
      requiredFields: {
        firstname: "First Name",
        lastname: "Last Name",
        phone: "Phone Number",
        selectedPackage: "Package Selection",
      },
    };
  },
  computed: {
    formIsValid() {
      for (const field in this.requiredFields) {
        if (!this.data[field]) {
          return false;
        }
      }
      return true;
    },
  },
  methods: {
    placeOrder() {
      console.log("Order Placed");
      for (const field in this.requiredFields) {
        if (!this.data[field]) {
          this.errors.push(`${this.requiredFields[field]} is required`);
        }
      }
      if (this.errors.length) {
        this.clearErrors();
        return;
      }
      const message = encodeURIComponent(
        `Hi, my name is ${this.data.firstname} ${this.data.lastname}, and I'd like to order ${this.data.selectedPackage}`
      );
      console.log({ message });
      window.open(
        `https://wa.me/+2348052277755?text=${message}`,
        "_blank" // <- This is what makes it open in a new window.
      );
    },
    clearErrors() {
      setTimeout(() => {
        this.success = "";
        this.errors = [];
      }, 4000);
    },
  },
};
</script>

<style>
</style>