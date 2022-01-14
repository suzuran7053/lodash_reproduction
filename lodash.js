const Lodash = {
    clamp(num, low, up) {
        if (num >= low && num <= up) {
            return num;
        } else if (num < low) {
            return low;
        } else if (num > up) {
            return up;
        }
    }

}