# Generative Art

## Here are some generative art pieces I made using p5.js


### 1. Yin and Yang

- Shape Function ($\tau$)

$$
\tau(y) =
\begin{cases}
8 + 6 \sin(\lfloor y \rfloor \oplus 9) & \text{if } y < 8 \text{ (Head)} \\
3 + \tan(y) & \text{if } y \ge 8 \text{ (Tail)}
\end{cases}
$$

- Modulation Factor ($\kappa$):
    $$\kappa = \tau(y) \cdot \cos(i + t/4)$$

- Distortion Field ($\delta$):
    $$\delta = \sqrt{\kappa^2 + \epsilon^2} + \cos(\epsilon + 2t + 4(i \bmod 2))$$

- Radius ($\rho$):
    $$\rho = \frac{y \cdot \kappa}{5} \left( 2 + \sin(2\delta + y - 4t) \right) + 80$$

- Angle ($\theta$):
    $$\theta = \frac{\delta}{4} - \frac{t}{2} + 3(i \bmod 2)$$

- Parametrized Form

$$
\begin{align*}
x &= 400 + \rho \cos(\theta) \\
y_{screen} &= 65 + \rho \sin(\theta) + 9\delta
\end{align*}
$$

![yin and yang](yin_and_yang/yin_and_yang.gif)